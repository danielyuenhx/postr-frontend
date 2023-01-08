import React from 'react';

import Space from '../icons/Space';
import Background from '../icons/Background';
import Wave from '../icons/Wave';

import styles from './Rules.module.css';
import Line from '../../UI/Line';

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
				<Line />
				<li>Behave like you would in real life. Remember, your post is public!</li>
				<Line />
				<li>Watch your language.</li>
				<Line />
				<li>You're welcome to post anything you like, but do ensure the stuff you post is decent.</li>
				<Line />
				<li>Most important of all, be nice :)</li>
				<Line />
			</ol>
		</div>
	);
};

export default Rules;
