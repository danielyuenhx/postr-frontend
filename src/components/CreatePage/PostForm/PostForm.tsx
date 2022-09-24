import React, { useRef, useState } from 'react';

import Editor from './Editor';

import styles from './PostForm.module.css';

const PostForm = () => {
	const submitHandler = (event: React.FormEvent) => {
		event?.preventDefault();
	};

	return (
		<div>
			<h2 className={styles.heading}>Create a post</h2>
			<div className={styles.line}></div>
			<form className={styles.card} onSubmit={submitHandler}>
				<input
					placeholder="Title"
					className={styles.title}
					maxLength={300}
				/>
				<div className={styles.editor}>
					<Editor />
				</div>
				<div className={styles.bottom}>
					<input placeholder="Tags..." className={styles.tags} />
					<div>
						<button className={styles.cancel}>Cancel</button>
						<button className={styles.post}>Post</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default PostForm;
