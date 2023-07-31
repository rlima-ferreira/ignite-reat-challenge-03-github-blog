import api from '../libs/axios';

const route =
  '/repos/rlima-ferreira/ignite-reat-challenge-03-github-blog/issues';

export interface IPost {
  id: number;
  title: string;
  description: string;
}

export const postApi = {
  find: async (params?: any) => api.get(route, { params }),
  findOne: async (id: number) => api.get(`${route}/${id}`),
};
