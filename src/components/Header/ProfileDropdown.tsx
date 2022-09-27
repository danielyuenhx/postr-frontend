import React from 'react';
import { motion } from 'framer-motion';

import User from './icons/User';
import Logout from './icons/Logout';

import styles from './ProfileDropdown.module.css';

type Props = { logoutHandler: () => void };

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
					<li>
						<User />
						Profile
					</li>
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
