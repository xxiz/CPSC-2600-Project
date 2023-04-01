export interface IDeal {
    title: string;
    url: string;
    description?: string;
    last_updated: string;
    votes: number;
    replies: number;
}

export interface IScrapeResult {
    count: number;
    timestamp: number;
    elapsed_ms: number;
    deals: IDeal[];
}
export interface IScrapeReturn {
    data: IDeal[];
    start_time: number;
}