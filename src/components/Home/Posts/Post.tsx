import React from 'react';
import LetteredAvatar from 'react-lettered-avatar';

import Like from '../icons/Like';

import styles from './Post.module.css';

const Post = () => {
	const item = localStorage.getItem('profile');
	const profile = item === null ? null : JSON.parse(item);

	return (
		<div className={styles.card}>
			<div className={styles.profile}>
				<div className={styles.avatar}>
					<LetteredAvatar name="d " size={20} />
				</div>
				<p style={{ fontWeight: '500' }}>test guy</p>
				<p style={{ fontWeight: '100' }}>• a few seconds ago</p>
			</div>
			<h2>Title here!</h2>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</p>
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
