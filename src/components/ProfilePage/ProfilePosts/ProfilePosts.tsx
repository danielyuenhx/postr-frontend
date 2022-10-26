import React, { useEffect, useState } from 'react';

import Post from '../../Home/Posts/Post';
import { useAppSelector } from '../../../hooks/hooks';

import styles from './ProfilePosts.module.css';

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

type User = {
	username: string;
	createdAt: string;
	totalPosts: number;
	totalLikes: number;
};

const ProfilePosts = (props: { user: User }) => {
	const [isLoading, setIsLoading] = useState(false);

	const fetchedPosts: PostType[] = useAppSelector((state) => state.posts);
	let posts = [...fetchedPosts];
	posts = posts.filter((post) => post.user === props.user.username);
	posts.reverse();

	return (
		<div className={styles.container}>
			{!posts.length ? (
				<div className={styles.card}>
					<h1>🥺</h1>
					<p>This user has not posted anything yet.</p>
				</div>
			) : (
				posts.map((post) => <Post post={post} key={post._id} />)
			)}
		</div>
	);
};

export default ProfilePosts;
