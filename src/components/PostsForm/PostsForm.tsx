import React from 'react';

import styles from './PostsForm.module.css';

const PostsForm = () => {
	return (
		<form>
			<div className={styles.card}>
                <img />
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
