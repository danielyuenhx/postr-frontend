import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../images/postr-logo.png';
import logo from '../../images/postr-logo-full.png';
// #1390F4

import SearchBar from './SearchBar';
import HeaderLogin from './HeaderLogin';

import styles from './Header.module.css';

const Header = () => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('profile') || '')
	);

	useEffect(() => {
		const token = user?.token;

		setUser(JSON.parse(localStorage.getItem('profile') || ''));
        console.log(user);
	}, []);

	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
				<SearchBar />
			</div>
			{user ? (
				// <nav className={styles.right}>
				// 	<ul>
				// 		<li>Home</li>
				// 		<li>Notifications</li>
				// 		<li>Profile</li>
				// 	</ul>
				// </nav>
				<nav className={styles.right}>{user.result.username}</nav>
			) : (
				<HeaderLogin />
			)}
		</header>
	);
};

export default Header;
