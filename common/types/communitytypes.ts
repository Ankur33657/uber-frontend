type User = {
  _id: string;
  name: string;
};

type Comment = {
  _id: string;
  message: string;
  user: User;
  createdAt: string;
};
export interface communityPostItems {
  _id: string;
  createdAt: string;
  updatedAt: string;
  data: {
    message: string;
    mediaUrl: string;
    mediaType: string;
    mediaKey: string;
    tags: string[];
  };
  comments: Comment[];
  like: string[];
  user: User;
}

export interface NewsArticle {
  uri: string;
  lang: string;
  isDuplicate: boolean;
  date: string;
  time: string;
  dateTime: string;
  dateTimePub: string;
  dataType: "news" | "pr" | "blog";
  sim: number;
  url: string;
  title: string;
  body: string;
  source: {
    uri: string;
    dataType: string;
    title: string;
  };
  authors: any[];
  image: string | null;
  eventUri: string | null;
  sentiment: number | null;
  wgt: number;
  relevance: number;
  shares: Record<string, any>;
}
