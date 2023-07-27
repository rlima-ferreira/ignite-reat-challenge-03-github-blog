import api from '../libs/axios';

const route = '';

export interface IPost {
  id: number;
  title: string;
  description: string;
}

export const postApi = {
  find: async (params?: any) => api.get(route, { params }),
  findOne: async (id: number) => api.get(`${route}/${id}`),
};
