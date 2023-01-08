import React, { useState } from 'react';

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
	picture: string;
};

type User = {
	username: string;
	createdAt: string;
	totalPosts: number;
	totalLikes: number;
	pinnedPost: string;
};

const ProfilePosts = (props: { user: User }) => {
	const [isLoading, setIsLoading] = useState(false);

	const fetchedPosts: PostType[] = useAppSelector((state) => state.posts);
	let posts = [...fetchedPosts];
	posts = posts.filter((post) => post.user === props.user.username);
	posts.reverse();

	const pinnedPost = posts.filter(
		(post) => post._id === props.user.pinnedPost
	)[0];

	if (pinnedPost) {
		posts = posts.filter((post) => post._id !== pinnedPost._id);
	}

	return (
		<div className={styles.container}>
			{(!posts.length && !pinnedPost) ? (
				<div className={styles.card}>
					<h1>🥺</h1>
					<p>This user has not posted anything yet.</p>
				</div>
			) : (
				<>
					{pinnedPost && (
						<Post
							post={pinnedPost}
							key={pinnedPost._id}
							isPinned={true}
						/>
					)}
					{posts.map((post) => (
						<Post post={post} key={post._id} isPinned={false} />
					))}
				</>
			)}
		</div>
	);
};

export default ProfilePosts;
