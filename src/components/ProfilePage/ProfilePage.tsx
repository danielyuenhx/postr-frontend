import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Profile from './Profile/Profile';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import { getUser } from '../../actions/users-actions';
import { useAppDispatch } from '../../hooks/hooks';
import { useAppSelector } from '../../hooks/hooks';

import styles from './ProfilePage.module.css';

const ProfilePage = () => {
	const dispatch = useAppDispatch();
	const { username } = useParams();

	useEffect(() => {
		const interval = setInterval(() => {
            if (username) {
                dispatch(getUser(username));
            }
		}, 1000);
        return () => clearInterval(interval);
	}, [username, dispatch]);

	const user = useAppSelector((state) => state.users);

	return (
		<div className={styles.container}>
			<Profile user={user} />
			<ProfilePosts user={user} />
		</div>
	);
};

export default ProfilePage;
