import api from '../libs/axios';
import { IUser } from './user.api';

const username = import.meta.env.VITE_GITHUB_USER;
const route = `/repos/${username}/ignite-reat-challenge-03-github-blog/issues`;

export interface IPost {
  number: number;
  title: string;
  body: string;
  comments: number;
  created_at: string;
  html_url: string;
  user: IUser;
}

export const postApi = {
  find: async () => api.get(route),
  findOne: async (id: number) => api.get(`${route}/${id}`),
  search: async (q: string) =>
    api.get(
      `/search/issues?q=${encodeURI(
        q
      )}%20repo:${username}/ignite-reat-challenge-03-github-blog`
    ),
};
