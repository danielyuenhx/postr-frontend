import React from 'react';
import LetteredAvatar from 'react-lettered-avatar';
import { Link } from 'react-router-dom';

import logo from '../../../images/only-logo-full.png';

import styles from './PostsForm.module.css';

const placeholders = [
	"What's up?",
	'Write something...',
	'Post something...',
	"What's happening?",
	'Create post...',
	"What's going on?",
	'Share something...',
	"What's on your mind?",
];

const PostsForm = () => {
	// check if user is logged in
	const item = localStorage.getItem('profile');
	const profile = item === null ? null : JSON.parse(item);

	const placeholder =
		placeholders[Math.floor(Math.random() * placeholders.length)];

	return (
		<form className={styles.card}>
			{profile ? (
				<>
					<div className={styles.user}>
						<div className={styles.avatar}>
							{profile && (
								<LetteredAvatar
									name={profile.result.username}
									size={20}
								/>
							)}
						</div>
						<label htmlFor="input">{profile.result.username}</label>
					</div>
					<Link to="/create" className={styles.textarea}>
						<input
							placeholder={placeholder}
							type="text"
							id="input"
							className={styles.input}
							disabled
						/>
					</Link>
				</>
			) : (
				<div className={styles.login}>
					<div className={styles.logo}>
						<img src={logo} />
					</div>
					<p>Log in to post something!</p>
					<Link to="/login">
						<button className={styles.button}>Login</button>
					</Link>
				</div>
			)}
		</form>
	);
};

export default PostsForm;
