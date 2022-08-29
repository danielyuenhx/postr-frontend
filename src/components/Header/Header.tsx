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
					<motion.li whileHover={{ scale: 1.1 }}>Home</motion.li>
					<motion.li whileHover={{ scale: 1.1 }}>Notifications</motion.li>
					<motion.li whileHover={{ scale: 1.1 }}>Profile</motion.li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
