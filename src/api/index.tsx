import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

type User = { username: string; password: string };
type NewUser = { username: string; password: string; confirmPassword: string };
type NewPost = { }

const API = axios.create({ baseURL: 'http://localhost:5000' });

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
// export const fetchPosts = () => API.get();
// export const createPost = (newPost: NewPost) => axios.post(url, newPost);

export const createUser = (newUser: NewUser) =>
	API.post('/users/createUser', newUser);
export const loginUser = (user: User) => API.post('/users/loginUser', user);
