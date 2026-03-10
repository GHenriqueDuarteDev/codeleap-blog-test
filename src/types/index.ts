export interface IPost {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export interface IApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPost[];
}
