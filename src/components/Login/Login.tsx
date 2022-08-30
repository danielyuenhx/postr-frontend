import React, { useEffect, useState } from 'react';

import ToggleButtons from './ToggleButtons';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';

import styles from './Login.module.css';

const Login = () => {
	const [toggle, setToggle] = useState(true);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isValid, setIsValid] = useState(false);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
	};

	const toggleHandler = (status: boolean) => {
		setToggle(status);
	};

	const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
	};

	const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const confirmPasswordHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setConfirmPassword(event.target.value);
	};

	useEffect(() => {
		if (username.trim().length > 0 && password.trim().length > 0) {
			if (!toggle && confirmPassword.trim().length === 0) {
                setIsValid(false);
			} else {
				setIsValid(true);
			}
		}
        else {
            setIsValid(false)
        }
	}, [username, password, confirmPassword, toggle]);

	return (
		<div className={styles.card}>
			<form onSubmit={submitHandler}>
				<ToggleButtons toggle={toggle} toggleHandler={toggleHandler} />
				<LoginInput
					label="Username"
					type="text"
					value={username}
					onChange={usernameHandler}
				/>
				<LoginInput
					label="Password"
					type="password"
					value={password}
					onChange={passwordHandler}
				/>
				{!toggle && (
					<LoginInput
						label="Confirm password"
						type="password"
						value={confirmPassword}
						onChange={confirmPasswordHandler}
					/>
				)}
				{toggle && (
					<p className={styles.signup}>
						Don't have an account?{' '}
						<span onClick={toggleHandler.bind(null, false)}>
							Sign up
						</span>
					</p>
				)}
				<LoginButton
					label={toggle ? 'Login' : 'Register'}
					isValid={isValid}
				/>
			</form>
		</div>
	);
};

export default Login;
