import React from 'react';
import { Link } from 'react-router-dom';
import LetteredAvatar from 'react-lettered-avatar';

import Dropdown from './icons/Dropdown';

import styles from './Profile.module.css';

type Props = { username: string; onClick: () => void  };

const Profile = (props: Props) => {
	return (
		<div className={styles.container} onClick={props.onClick}>
			<div className={styles.avatar}>
				<LetteredAvatar name={props.username} size={30} />
			</div>
			{props.username}
            <Dropdown />
		</div>
	);
};

export default Profile;
