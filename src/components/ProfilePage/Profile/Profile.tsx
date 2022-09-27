import React, { useEffect } from 'react';
import LetteredAvatar from 'react-lettered-avatar';
import moment from 'moment';

import styles from './Profile.module.css';

type User = {
	username: string;
	createdAt: string;
	totalPosts: number;
	totalLikes: number;
};

const Profile = (props: {user: User}) => {
	return (
		<div className={styles.container}>
			<LetteredAvatar name={props.user.username} size={60} />
			<p>{props.user.username}</p>
			Joined {moment(props.user.createdAt).fromNow()}
			<p>Total posts: {props.user.totalPosts}</p>
			<p>Total likes: {props.user.totalLikes}</p>
		</div>
	);
};

export default Profile;
