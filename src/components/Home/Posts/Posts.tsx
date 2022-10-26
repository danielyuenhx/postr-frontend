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
	likes: [string];
	createdAt: Date;
};

const Posts = (props: { pinnedPost: String }) => {
	const fetchedPosts: PostType[] = useAppSelector((state) => state.posts);
	const posts = [...fetchedPosts];
	posts.reverse();

	return (
		<div className={styles.container}>
			{!posts.length
				? Array.from(Array(5)).map((x) => (
						<div className={styles.card} key={x}>
							<Facebook />
						</div>
				  ))
				: posts.map((post) => (
						<Post
							post={post}
							key={post._id}
							isPinned={post._id === props.pinnedPost}
						/>
				  ))}
		</div>
	);
};

export default Posts;
