import React from 'react';
import ContentLoader, { Facebook } from 'react-content-loader';

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
    likeCount: number;
	createdAt: Date;
};

const Posts = () => {
	const fetchedPosts: PostType[] = useAppSelector((state) => state.posts);
	const posts = [...fetchedPosts];
	posts.reverse();

	return (
		<div className={styles.container}>
			{!posts.length
				? Array(5).fill(
						<div className={styles.card}>
							<Facebook />
						</div>
				  )
				: posts.map((post) => <Post post={post} key={post._id} />)}
		</div>
	);
};

export default Posts;
