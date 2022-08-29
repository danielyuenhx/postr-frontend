import React from 'react';
// import logo from '../../images/postr-logo.png';
import { motion } from 'framer-motion';
import logo from '../../images/logo.png';
// #1390F4

import SearchBar from './SearchBar';

import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<img src={logo} alt="logo" />
				<SearchBar />
			</div>
			<nav className={styles.right}>
				<ul>
					<li>Home</li>
					<li>Notifications</li>
					<li>Profile</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
