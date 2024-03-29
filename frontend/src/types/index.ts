export interface IDeal {
  title: string;
  url: string;
  description?: string;
  last_updated: string;
  votes: number;
  replies: number;
}

export interface IScrape {
  count: number;
  timestamp: number;
  elapsed_ms: number;
  deals: IDeal[];
}

export interface IUser {
  username: string;
  webhook_url?: string;
  notification: boolean;
  history: IDeal[];
}
