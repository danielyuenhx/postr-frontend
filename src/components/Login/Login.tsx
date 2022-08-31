import React, { useEffect, useState } from 'react';

import ToggleButtons from './ToggleButtons';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';
import LoginError from './LoginError';

import { createUser } from '../../actions/user-actions';
import { useAppDispatch } from '../../hooks/hooks';

import styles from './Login.module.css';

const Login = () => {
	const [toggle, setToggle] = useState(true);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState({
		eight: false,
		uppercase: false,
		number: false,
	});
	const [isValid, setIsValid] = useState(false);

	const dispatch = useAppDispatch();

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		dispatch(createUser({ username, password }));
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

	useEffect(() => {
		if (password.trim().length < 8) {
			setError((prevError) => ({ ...prevError, eight: false }));
		} else {
			setError((prevError) => ({ ...prevError, eight: true }));
		}

		if (/[A-Z]/.test(password.trim())) {
			setError((prevError) => ({ ...prevError, uppercase: true }));
		} else {
			setError((prevError) => ({ ...prevError, uppercase: false }));
		}

		if (/\d/.test(password.trim())) {
			setError((prevError) => ({ ...prevError, number: true }));
		} else {
			setError((prevError) => ({ ...prevError, number: false }));
		}
	}, [password]);

	const confirmPasswordHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setConfirmPassword(event.target.value);
	};

	useEffect(() => {
		if (username.trim().length > 0 && password.trim().length > 7) {
			if (!toggle) {
				if (
					confirmPassword.trim().length > 0 &&
					password.trim() === confirmPassword.trim()
				) {
					setIsValid(true);
				} else {
					setIsValid(false);
				}
			} else {
				setIsValid(true);
			}
		} else {
			setIsValid(false);
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
					<>
						<LoginError error={error} />
						<LoginInput
							label="Confirm password"
							type="password"
							value={confirmPassword}
							onChange={confirmPasswordHandler}
						/>
					</>
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
					label={toggle ? 'Login' : 'Sign Up'}
					// non-empty username and password && (login || (register && fulfill requirements))
					isValid={
						isValid &&
						(toggle ||
							(!toggle && Object.values(error).every(Boolean)))
					}
				/>
			</form>
		</div>
	);
};

export default Login;