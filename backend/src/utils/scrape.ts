import axios from 'axios';
import cheerio from 'cheerio';
import { IScrapeReturn } from '../types';
import moment from 'moment';

async function scrape(page: number = 1): Promise<IScrapeReturn> {

    const start_time = new Date().getTime();

    // determine the URL to scrape based on the page number if provided
    const TRENDING = page > 1 ? `https://forums.redflagdeals.com/hot-deals-f9/trending/${page}` : 'https://forums.redflagdeals.com/hot-deals-f9/trending/';

    // spoof the headers to make the request look like it's coming from a user browsing the forums, don't really need this but just incase
    const spoof = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Host': 'forums.redflagdeals.com',
        'Referer': 'https://forums.redflagdeals.com/',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/111.0'
    };

    // Reference: https://axios-http.com/docs/api_intro
    const response = await axios.get(TRENDING, { headers: spoof });

    // Reference: https://cheerio.js.org/
    const $ = cheerio.load(response.data);
    let deals = [];

    // Using the cheerio library, selectors were determined by inspecting the HTML elements in the browser
    deals = $('ul.topiclist.topics.trending.with_categories li.row.topic').map((index, element) => {
        const title = $(element).find('h3.topictitle a.topic_title_link').text();
        const url = $(element).find('h3.topictitle a.topic_title_link').attr('href');
        const description = $(element).find('div.post_preview_body').text();
        const votes = $(element).find('.total_count.total_count_selector').text();
        const replies = $(element).find('.thread-meta-small .thread_meta_small_replies').text().trim();
        const last_updated = $(element).find('.thread-meta-large .last_updated_post_time').text().trim();

        return {
            title,
            url,
            votes,
            replies,
            last_updated
        };
    }).get();


    // Sanitize the deals so it's easier to work with
    let sanitized = deals.map(deal => sanitize(deal));
    console.log(`Scraped ${sanitized.length} deals`);

    return {
        data: sanitized,
        start_time
    };
}

function sanitize(deal) {
    const rawDate = deal.last_updated.replace("Last Updated ", "");

    try {
        // https://stackoverflow.com/a/28002368
        const date = moment(rawDate, "MMM D[st|nd|rd|th], YYYY h:mm A").utc().toISOString();

        return {
            title: deal.title.trim(),
            url: `https://forums.redflagdeals.com${deal.url}`,
            votes: parseInt(deal.votes) || -1,
            replies: parseInt(deal.replies) || -1,
            last_updated: date
        };
    } catch (error) {
        console.log(`Error Sanitizing: ${deal.title}`);
        console.log(deal);
        console.log(error);
        return null;
    }
}


export { scrape };