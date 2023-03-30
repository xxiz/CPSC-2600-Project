import axios from 'axios';
import cheerio from 'cheerio';
import { Deal } from '../types';

interface ScrapeOptions {
    minVotes?: number;
    minReplies?: number;
    age?: number;
  }

async function scrape({ minVotes = 100, minReplies = 10, age = 60 }: ScrapeOptions = {}) {
    
    // send a request to the RFD page
    const TRENDING = 'https://forums.redflagdeals.com/hot-deals-f9/trending/';
    const response = await axios.get(TRENDING);

    // parse the HTML
    const $ = cheerio.load(response.data);

    // extract the deals into an array
    let deals = [];

    deals = $('ul.topiclist.topics.trending.with_categories li.row.topic').each((index, element) => {
        const title = $(element).find('h3.topictitle a.topic_title_link').text();
        const url = $(element).find('h3.topictitle a.topic_title a.topic_title_link').attr('href');
        const votes = parseInt($(element).find('div.trending_votes span').text());
        const replies = parseInt($(element).find('div.trending_replies span').text());
        const last_updated = $(element).find('div.trending_last_post span').text();

        return {
            title,
            url,
            votes,
            replies,
            last_updated
        };
    }).get();

    // append the raw data to the deals

    // print the deals
    console.log(deals);

    // filter the deals by the criteria if any

    // return the deals as JSON objects in an array
}

// determine if a deal is trending by comparing the number of votes and replies against time
function isTrending() {

    // get the number of votes and replies

    // get the time since the deal was posted

    // compare the number of votes and replies against time

}

export default scrape;