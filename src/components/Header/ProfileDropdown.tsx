import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import User from './icons/User';
import Logout from './icons/Logout';

import styles from './ProfileDropdown.module.css';

type Props = {
	logoutHandler: () => void;
	username: string;
	onClickProfile: () => void;
};

const ProfileDropdown = React.forwardRef(
	(props: Props, ref: React.Ref<HTMLDivElement>) => {
		return (
			<motion.div
				initial={{ opacity: 0, y: '-50%' }}
				animate={{ opacity: 1, y: '0%' }}
				exit={{ opacity: -1, y: '-50%' }}
				className={styles.container}
				ref={ref}
			>
				<ul>
					<Link to={`/profile/${props.username}`}>
						<li onClick={props.onClickProfile}>
							<User />
							Profile
						</li>
					</Link>
					<li onClick={props.logoutHandler}>
						<Logout />
						Logout
					</li>
				</ul>
			</motion.div>
		);
	}
);

export default ProfileDropdown;
