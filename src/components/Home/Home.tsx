import React from 'react';

import InfoSection from './InfoSection/InfoSection';
import Posts from './Posts/Posts';

import styles from './Home.module.css';

const Home = () => {
	// check if user is logged in
	const item = localStorage.getItem('profile');
	const profile = item === null ? null : JSON.parse(item);

	return (
		<div className={styles.home}>
			<Posts pinnedPost={profile?.result?.pinnedPost} />
			<InfoSection />
			{/* <p>© 2022 postr by Daniel Yuen</p>   */}
		</div>
	);
};

export default Home;
