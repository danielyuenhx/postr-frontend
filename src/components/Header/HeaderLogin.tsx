import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HeaderLogin.module.css';

const HeaderLogin = () => {
	return (
		<Link to="/login">
			<button className={styles.button}>Log In</button>
		</Link>
	);
};

export default HeaderLogin;
