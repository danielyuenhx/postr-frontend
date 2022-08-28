import axios from 'axios';

const url = 'http://localhost:5000/posts';

// callback functions that make requests
export const fetchposts = () => axios.get(url);