import { IDeal } from '../types';

function filterTrendingDeals(deals: IDeal[]) {
    const trendingDeals = [];

    for (const deal of deals) {
        if (deal.votes > 50 && deal.replies > 10) {
            trendingDeals.push(deal);
        }
    }

    const TWO_DAYS_IN_MILLISECONDS = 1000 * 3600 * 24 * 2;
    const now = new Date().getTime();
    const filteredDeals = trendingDeals.filter(deal => {
        const lastUpdated = new Date(deal.last_updated).getTime();
        const diff = Math.abs(now - lastUpdated);
        const diffDays = Math.ceil(diff / TWO_DAYS_IN_MILLISECONDS);
        return diffDays < 2;
    });

    return filteredDeals;
}

export default filterTrendingDeals;