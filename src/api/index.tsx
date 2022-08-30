import axios from 'axios';

const url = 'http://localhost:5000/users';

type User = {username: string, password: string}

// callback functions that make requests
// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);

export const createUser = (newUser: User) => axios.post(url, newUser);