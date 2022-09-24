import React from 'react';

import styles from './CreatePage.module.css';
import PostForm from './PostForm/PostForm';

const CreatePost = () => {

	return (
		<div className={styles.container}>
            <PostForm />
		</div>
	);
};

export default CreatePost;
