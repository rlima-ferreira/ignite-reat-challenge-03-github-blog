import api from '../libs/axios';

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
  find: async (username: string) => api.get(`${route}/${username}`),
};
