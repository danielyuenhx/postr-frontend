import React from 'react';

import Space from '../icons/Space';
import Background from '../icons/Background';
import Wave from '../icons/Wave';

import styles from './Rules.module.css';

const Rules = () => {
	return (
		<div className={styles.card}>
			<div className={styles.top}>
				<Space />
				<Background />
        <Wave />
			</div>
			<b>Posting publicly</b>
			<ul>
				<li>Behave like you would in real life. Remember, your post is public!</li>
				<li>Watch your language.</li>
				<li>Post decent stuff only. Nobody wants to have to bleach their eyes. </li>
				<li>Most important of all, be nice :)</li>
			</ul>
		</div>
	);
};

export default Rules;
