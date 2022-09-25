import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post';
import { useAppSelector } from '../../../hooks/hooks';

import styles from './Posts.module.css';

type PostType = {
	_id: string;
	user: string;
	title: string;
	content: string;
	tags: string;
	selectedFile: string;
	createdAt: Date;
};

const Posts = () => {
	const fetchedPosts: PostType[] = useAppSelector((state) => state.posts);
	const posts = [...fetchedPosts];
	posts.reverse();

	return !posts.length ? (
		<p>no posts</p>
	) : (
		<div className={styles.container}>
			{posts.map((post) => (
				<Post post={post} key={post._id} />
			))}
		</div>
	);
};

export default Posts;
