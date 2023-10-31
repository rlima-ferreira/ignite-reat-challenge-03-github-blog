import api from '../libs/axios';

const username = import.meta.env.VITE_GITHUB_USER;
const route = `/repos/${username}/ignite-reat-challenge-03-github-blog/issues`;

export interface IPost {
  number: number;
  title: string;
  body: string;
}

export const postApi = {
  find: async (params?: any) => api.get(route, { params }),
  findOne: async (id: number) => api.get(`${route}/${id}`),
  search: async (q: string) =>
    api.get(
      `/search/issues?q=${encodeURI(
        q
      )}%20repo:${username}/ignite-reat-challenge-03-github-blog`
    ),
};
