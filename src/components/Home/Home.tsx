import React from 'react';

import PostsForm from './PostsForm/PostsForm';
import Posts from './Posts/Posts';

import styles from './Home.module.css';
type User = { auth: { result: { username: ''; password: '' }; token: '' } };

const Home = () => {
	return (
		<div className={styles.home}>
			<Posts />
			<PostsForm />
		</div>
	);
};

export default Home;
