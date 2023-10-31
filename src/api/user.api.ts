import api from '../libs/axios';

const username = import.meta.env.VITE_GITHUB_USER;
const route = '/users';

export interface IUser {
  avatar_url?: string;
  name: string;
  login: string;
  bio?: string;
  company?: string;
  followers: number;
  html_url: string;
}

export const userApi = {
  find: async () => api.get(`${route}/${username}`),
};
