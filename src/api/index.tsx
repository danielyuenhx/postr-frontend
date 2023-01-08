import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

type User = { username: string; password: string };
type NewUser = { username: string; password: string; confirmPassword: string };
type NewPost = {
  user: string;
  title: string;
  content: string;
  tags: string;
  selectedFile: string;
};

// use localhost if in development
const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

// function that happens on each request
API.interceptors.request.use((req: AxiosRequestConfig) => {
  // send token to backend to verify user is logged in
  // prepending token to header
  const item = localStorage.getItem('profile');
  if (item) {
    if (req.headers === undefined) {
      req.headers = {};
    }
    req.headers.Authorization = `Bearer ${
      item === null ? null : JSON.parse(item).token
    }`;
  }

  return req;
});

// callback functions that make requests
export const getPosts = () => API.get('/posts');
export const createPost = (newPost: NewPost) => API.post('/posts', newPost);
export const deletePost = (id: string) => API.delete(`/posts/${id}`);
export const likePost = (id: string) => API.patch(`/posts/${id}/likePost`);

export const createUser = (newUser: NewUser) =>
  API.post('/users/createUser', newUser);
export const loginUser = (user: User) => API.post('/users/loginUser', user);
export const deleteUser = (id: string) => API.delete(`/users/${id}`);
export const getUser = (username: string) => API.get(`/users/${username}`);
export const updatePicture = (userId: string, image: string) =>
  API.post(`/users/updatePicture`, { userId, image });
export const pinPost = (userId: string, postId: string) =>
  API.post('/users/pinPost', { userId, postId });
