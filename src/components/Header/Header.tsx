import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSnackbar } from 'react-simple-snackbar';
import decode, { JwtPayload } from 'jwt-decode';

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
	// check if user is logged in
	const item = localStorage.getItem('profile');
	const profile = item === null ? null : JSON.parse(item);

	const [user, setUser] = useState(profile);
	const [isOpen, setIsOpen] = useState(false);

	// check logged in on every page change
	const location = useLocation();

	useEffect(() => {
		const token = user?.token;

		if (token) {
			const decodedToken = decode<JwtPayload>(token);
            const expiry = decodedToken ? decodedToken.exp : null;

            if (expiry) {
                if (expiry*1000 < new Date().getTime()) {
                    logoutHandler();
                }
            }
		}

		setUser(profile);
	}, [location]);

	// on logout:
	// 1. remove logged in user
	// 2. close the dropdown
	// 3. show snackbar
	// 4. return to home page
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [openSnackbar, closeSnackbar] = useSnackbar();

	const logoutHandler = () => {
		dispatch(authActions.logout());
		setUser('');
		setIsOpen(false);
        window.location.reload();
		openSnackbar('Successfully logged out!', [2500]);
		navigate('/');
	};

	// add close dropdown mouselistener to close on outside click
	const dropdownRef = useRef<HTMLDivElement>(null);
	const profileRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// click outside handler
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

		// bind event listener to entire document
		document.addEventListener('mouseup', clickOutsideHandler);
		return () => {
			// remove event listener on cleanup
			document.removeEventListener('mouseup', clickOutsideHandler);
		};
	}, [dropdownRef, profileRef]);

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
						<li className={styles.icon}>
							<Home filled={location.pathname === '/'} />
						</li>
						<li className={styles.icon}>
							<div
								className={
									user.result.notifications && styles.badge
								}
							/>
							<Notifications
								filled={location.pathname === '/notifications'}
							/>
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
