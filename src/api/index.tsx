import axios from 'axios';

type User = { username: string; password: string };
type NewUser = {username: string, password: string, confirmPassword: string}

const API = axios.create({baseURL: 'http://localhost:5000'})

// callback functions that make requests
// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);

export const createUser = (newUser: NewUser) => API.post('/users/createUser', newUser);
export const loginUser = (user: User) => API.post('/users/loginUser', user);