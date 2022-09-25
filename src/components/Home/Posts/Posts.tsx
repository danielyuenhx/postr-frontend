import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post';
import { useAppSelector } from '../../../hooks/hooks';

import styles from './Posts.module.css';

type Post = {
	title: string;
	content: string;
	tags: string;
	selectedFile: string;
};

const Posts = () => {
	const posts = useAppSelector((state) => state.posts);
    console.log(posts);
    
	return (
		<div className={styles.container}>
			<Post />
			<Post />
			<Post />
		</div>
	);
};

export default Posts;
