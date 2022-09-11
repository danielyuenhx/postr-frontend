import React from 'react';

import User from './icons/User';
import Logout from './icons/Logout';

import styles from './ProfileDropdown.module.css';

type Props = { logoutHandler: () => void };

const ProfileDropdown = React.forwardRef(
	(props: Props, ref: React.Ref<HTMLDivElement>) => {
		return (
			<div className={styles.container} ref={ref}>
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
			</div>
		);
	}
);

export default ProfileDropdown;
