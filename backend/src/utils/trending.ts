import { IDeal } from './../types/index';

function getTrending(deals: IDeal[]) {

    let trending_deals = [];

    for (let deal of deals) {
        if (deal.votes > 50 && deal.replies > 10) {
            trending_deals.push(deal);
        }
    }
    return trending_deals;
}

export default getTrending;