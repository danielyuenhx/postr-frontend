import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../images/postr-logo.png';
import logo from '../../images/postr-logo-full.png';
// #1390F4

import SearchBar from './SearchBar';
import HeaderLogin from './HeaderLogin';

import styles from './Header.module.css';

const Header = () => {
	const user = null;

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
						<li>Home</li>
						<li>Notifications</li>
						<li>Profile</li>
					</ul>
				</nav>
			) : (
				<HeaderLogin />
			)}
		</header>
	);
};

export default Header;
