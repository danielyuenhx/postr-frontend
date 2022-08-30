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
				<LoginInput label="Username" type="text" />
				<LoginInput label="Password" type="password" />
				{!toggle && (
					<LoginInput label="Confirm password" type="password" />
				)}
				{toggle && (
					<p className={styles.signup}>
						Don't have an account?{' '}
						<span onClick={toggleHandler.bind(null, false)}>
							Sign up
						</span>
					</p>
				)}
			</form>
		</div>
	);
};

export default Login;
