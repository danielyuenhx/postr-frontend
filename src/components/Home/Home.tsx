import React from 'react';

import PostsForm from './PostsForm/PostsForm';
import Posts from './Posts/Posts';

import styles from './Home.module.css';

const Home = () => {
	// check if user is logged in
	const item = localStorage.getItem('profile');
	const profile = item === null ? null : JSON.parse(item);

	return (
		<div className={styles.home}>
			<Posts />
			<PostsForm />
			{/* <p>© 2022 postr by Daniel Yuen</p>   */}
		</div>
	);
};

export default Home;
