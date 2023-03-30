export type Deal = {
    title: string;
    topic?: string;
    link: string;
    description?: string;
    last_updated: string;
    votes: number;
    raw?: {
        last_updated?: string;
        votes?: string;
        description?: string;
        link?: string;
        topic?: string;
        title?: string;
    };
}