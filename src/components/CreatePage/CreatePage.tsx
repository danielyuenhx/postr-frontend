import React from 'react';

import styles from './CreatePage.module.css';
import PostForm from './PostForm/PostForm';
import Rules from './PostForm/Rules';

const CreatePost = () => {
	return (
		<div className={styles.container}>
			<PostForm />
			<Rules />
		</div>
	);
};

export default CreatePost;
