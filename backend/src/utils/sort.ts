function sortDeals(deals, flag) {
    return deals.sort((a, b) => {
        if (flag == 'age') {
            const aD = new Date(a.last_updated);
            const bD = new Date(b.last_updated);
            return bD.getTime() - aD.getTime();
        } else {
            return b[flag] - a[flag];
        }
    });
}

export { sortDeals };