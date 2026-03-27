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
