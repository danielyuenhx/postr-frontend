import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LetteredAvatar from 'react-lettered-avatar';

import { authActions } from '../../store/auth-slice';
import { useAppDispatch } from '../../hooks/hooks';

import Home from './icons/Home';
import Notifications from './icons/Notifications';
import SearchBar from './SearchBar';
import HeaderLogin from './HeaderLogin';
import Profile from './Profile';
import ProfileDropdown from './ProfileDropdown';

import logo from '../../images/postr-logo-full.png';

import styles from './Header.module.css';

const Header = () => {
	const item = localStorage.getItem('profile');
	const profile = item === null ? null : JSON.parse(item);
	const [user, setUser] = useState(profile);

	const location = useLocation();

	useEffect(() => {
		const token = user?.token;

		setUser(profile);
	}, [location]);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const logoutHandler = () => {
		const res = dispatch(authActions.logout());
		setUser('');
		navigate('/');
	};

	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
				<SearchBar />
			</div>
			{user ? (
				<nav className={styles.right}>
					<ul>
						<li>
							<Home />
						</li>
						<li>
							<Notifications />
						</li>
						<li>
							{/* <Link to="/login" className={styles.avatar}>
								<LetteredAvatar
									name={user.result.username}
									size={35}
								/>
							</Link> */}
							<Profile username={user.result.username} />
						</li>
					</ul>
				</nav>
			) : (
				<HeaderLogin />
			)}
			<ProfileDropdown logoutHandler={logoutHandler} />
		</header>
	);
};

export default Header;
