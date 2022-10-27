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
			<ol>
				<li>Behave like you would in real life</li>
				<li>Remember, your post is public!</li>
				<li>Be nice :)</li>
			</ol>
		</div>
	);
};

export default Rules;
