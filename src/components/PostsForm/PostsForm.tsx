import React from 'react';
import { useSelector } from 'react-redux';
import LetteredAvatar from 'react-lettered-avatar';

import styles from './PostsForm.module.css';

type User = {auth: { result: { username: '', password: '' }, token: '' }};

const PostsForm = () => {
    const username = useSelector((state: User) => state.auth.result.username);

	return (
		<form>
			<div className={styles.card}>
				<div className={styles.avatar}>
					{username && <LetteredAvatar name={username} size={35} />}
				</div>
                <input
                    placeholder="Write something..."
                    type="text"
                    id="input"
                    className={styles.input}
                />
			</div>
		</form>
	);
};

export default PostsForm;
