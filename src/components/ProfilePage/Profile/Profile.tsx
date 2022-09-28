import React, { useEffect } from 'react';
import LetteredAvatar from 'react-lettered-avatar';
import moment from 'moment';

import styles from './Profile.module.css';
import Like from '../../Home/icons/Like';
import Heart from '../icons/Heart';
import Write from '../icons/Write';
import Birthday from '../icons/Birthday';

type User = {
	username: string;
	createdAt: string;
	totalPosts: number;
	totalLikes: number;
};

const Profile = (props: { user: User }) => {
	return (
		<div className={styles.container}>
			<div className={styles.avatar}>
				<LetteredAvatar name={props.user.username} size={60} />
			</div>
			<h2>{props.user.username}</h2>
			<p className={styles.fromNow}>
				Joined {moment(props.user.createdAt).fromNow()}
			</p>
			<div className={styles.stats}>
				<div className={styles.stat}>
					<p>postr day</p>
					<div>
						<Birthday />
						<span>{moment(props.user.createdAt).format('MMMM DD, YYYY')}</span>
					</div>
				</div>
				<div className={styles.smallStats}>
					<div className={styles.stat}>
						<p>Likes</p>
						<div>
							<Heart /> <span>{props.user.totalLikes}</span>
						</div>
					</div>
					<div className={styles.stat}>
						<p>Posts</p>
						<div>
							<Write /> <span>{props.user.totalPosts}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
