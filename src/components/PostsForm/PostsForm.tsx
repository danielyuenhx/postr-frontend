import React from 'react';

import Input from './Input'

import styles from './PostsForm.module.css'

const PostsForm = () => {
	return (
        <form>
            <div className={styles.card}>
                <h1>Write Post</h1>
                <Input title="Post" titlePlaceholder="Write something..." />
            </div>
        </form>
    )
};

export default PostsForm;
