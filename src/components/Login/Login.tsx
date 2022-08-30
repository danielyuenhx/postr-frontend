import React, { useState } from 'react';

import ToggleButtons from './ToggleButtons';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';

import styles from './Login.module.css';

const Login = () => {
	const [toggle, setToggle] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
	};

	const toggleHandler = (status: boolean) => {
		setToggle(status);
	};

	return (
		<div className={styles.card}>
			<form onSubmit={submitHandler}>
				<ToggleButtons toggle={toggle} toggleHandler={toggleHandler} />
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
                <LoginButton label={toggle ? "Login" : "Register"} />
			</form>
		</div>
	);
};

export default Login;
