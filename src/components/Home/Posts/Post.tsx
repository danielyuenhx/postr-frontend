import React from 'react';
import LetteredAvatar from 'react-lettered-avatar';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';

import Like from '../icons/Like';

import styles from './Post.module.css';

type Post = {
    _id: string;
	user: string;
	title: string;
	content: string;
	tags: string;
	selectedFile: string;
    createdAt: Date;
};

const Post = (props: { post: Post, key: string }) => {
	const item = localStorage.getItem('profile');
	const profile = item === null ? null : JSON.parse(item);

	const post = props.post;

	return (
		<div className={styles.card}>
			<div className={styles.profile}>
				<div className={styles.avatar}>
					<LetteredAvatar name={post.user} size={20} />
				</div>
				<p style={{ fontWeight: '500' }}>{post.user}</p>
				<p style={{ fontWeight: '100' }}>• {moment(post.createdAt).fromNow()}</p>
			</div>
			<h2>{post.title}</h2>
			<div className={styles.content}>
				{ReactHtmlParser(post.content)}
			</div>
            <img src={post.selectedFile} />
			<div className={styles.tags}>
				<p>#tags</p> <p>#tags</p> <p>#tags</p>
			</div>
			<div className={styles.line} />
			<div className={styles.like}>
				<Like />
				<span>100 likes</span>
			</div>
		</div>
	);
};

export default Post;
