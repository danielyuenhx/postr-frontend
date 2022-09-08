import axios from 'axios';

const url = 'http://localhost:5000/users';

type User = { username: string; password: string };
type NewUser = {username: string, password: string, confirmPassword: string}

// callback functions that make requests
// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);

export const createUser = (newUser: NewUser) => axios.post(url, newUser);
export const loginUser = (user: User) => axios.post(url, user);