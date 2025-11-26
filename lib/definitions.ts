export type PostInfo = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type UsersResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: {
    url: string;
    text: string;
  };
  _meta: {};
};
