import React from 'react';
import { useSelector } from 'react-redux';
import LetteredAvatar from 'react-lettered-avatar';

import styles from './PostsForm.module.css';

type User = { auth: { result: { username: ''; password: '' }; token: '' } };

const PostsForm = () => {
	// check if user is logged in
	const item = localStorage.getItem('profile');
	const profile = item === null ? null : JSON.parse(item);

	return (
			<form className={styles.card}>
				<div className={styles.user}>
					<div className={styles.avatar}>
						{profile && (
							<LetteredAvatar
								name={profile.result.username}
								size={25}
							/>
						)}
					</div>
					<label htmlFor="input">{profile.result.username}</label>
				</div>
				<div className={styles.textarea}>
					<input
						placeholder="What's up?"
						type="text"
						id="input"
						className={styles.input}
						disabled
					/>
				</div>
			</form>
	);
};

export default PostsForm;
