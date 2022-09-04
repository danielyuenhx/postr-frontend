import React, { useEffect, useState } from 'react';

import ToggleButtons from './ToggleButtons';
import LoginSection from './Sections/LoginSection';
import SignUpSection from './Sections/SignUpSection';

import styles from './Login.module.css';

const Login = () => {
	const [toggle, setToggle] = useState(true);

	const toggleHandler = (status: boolean) => {
		setToggle(status);
	};

	return (
		<div className={styles.card}>
			<ToggleButtons toggle={toggle} toggleHandler={toggleHandler} />
            {toggle ? <LoginSection onToggle={toggleHandler} /> : <SignUpSection />}
		</div>
	);
};

export default Login;
