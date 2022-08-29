import React, { useState } from 'react';

import LoginButtons from './LoginButtons';
import LoginInput from './LoginInput';

import styles from './Login.module.css';

const Login = () => {
	const [toggle, setToggle] = useState(true);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
	};

	const toggleHandler = (status: boolean) => {
		setToggle(status);
	};

	return (
		<div className={styles.card}>
			<form onSubmit={submitHandler}>
				<LoginButtons toggle={toggle} toggleHandler={toggleHandler} />
                <LoginInput />
			</form>
		</div>
	);
};

export default Login;
