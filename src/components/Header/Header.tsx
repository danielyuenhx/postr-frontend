import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSnackbar } from 'react-simple-snackbar';

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
	const [isOpen, setIsOpen] = useState(false);

	const location = useLocation();

	useEffect(() => {
		const token = user?.token;

		setUser(profile);
	}, [location]);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [openSnackbar, closeSnackbar] = useSnackbar();

	const logoutHandler = () => {
		dispatch(authActions.logout());
		setUser('');
		setIsOpen(false);
		openSnackbar('Successfully logged out!', [2500]);
		navigate('/');
	};

	const dropdownRef = useRef<HTMLDivElement>(null);
	const profileRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function clickOutsideHandler(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Element) &&
				profileRef.current &&
				!profileRef.current.contains(event.target as Element)
			) {
				setIsOpen(false);
			}
		}

		// Bind the event listener
		document.addEventListener('mouseup', clickOutsideHandler);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mouseup', clickOutsideHandler);
		};
	}, [dropdownRef]);

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
							<Profile
								username={user.result.username}
								onClick={setIsOpen.bind(null, !isOpen)}
								ref={profileRef}
								isOpen={isOpen}
							/>
						</li>
					</ul>
				</nav>
			) : (
				<HeaderLogin />
			)}
			{isOpen && (
				<ProfileDropdown
					logoutHandler={logoutHandler}
					ref={dropdownRef}
				/>
			)}
		</header>
	);
};

export default Header;
