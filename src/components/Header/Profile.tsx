import React from 'react';
import LetteredAvatar from 'react-lettered-avatar';

import Dropdown from './icons/Dropdown';
import ArrowUp from './icons/ArrowUp';

import styles from './Profile.module.css';

type Props = { username: string; onClick: () => void; isOpen: boolean };

const Profile = React.forwardRef(
	(props: Props, ref: React.Ref<HTMLDivElement>) => {
		return (
			<div className={styles.container} onClick={props.onClick} ref={ref}>
				<div className={styles.avatar}>
					<LetteredAvatar name={props.username} size={30} />
				</div>
				{props.username}
				<Dropdown isOpen={props.isOpen} />
			</div>
		);
	}
);

export default Profile;
