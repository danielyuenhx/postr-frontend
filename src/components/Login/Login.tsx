import React, { useEffect, useState } from 'react';

import ToggleButtons from './ToggleButtons';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';
import LoginError from './LoginError';

import { createUser } from '../../actions/user-actions';
import { useAppDispatch } from '../../hooks/hooks';

import styles from './Login.module.css';

const checkUsername = () => {
	return;
};

var timeout = setTimeout(checkUsername, 2000);

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
    // username > 0, password > 7 chars and passwords match
	const [isValid, setIsValid] = useState(false);

	const [showLoginError, setShowLoginError] = useState(false);

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

		clearTimeout(timeout);
		timeout = setTimeout(checkUsername, 2000);
	};

	const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);

		if (event.target.value.trim().length < 8) {
			setError((prevError) => ({ ...prevError, eight: false }));
		} else {
			setError((prevError) => ({ ...prevError, eight: true }));
		}

		if (/[A-Z]/.test(event.target.value.trim())) {
			setError((prevError) => ({ ...prevError, uppercase: true }));
		} else {
			setError((prevError) => ({ ...prevError, uppercase: false }));
		}

		if (/\d/.test(event.target.value.trim())) {
			setError((prevError) => ({ ...prevError, number: true }));
		} else {
			setError((prevError) => ({ ...prevError, number: false }));
		}
	};

	const confirmPasswordHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setConfirmPassword(event.target.value);
	};

	// useEffect(() => {
	// 	const timer = setTimeout((confirmPassword) => {
    //         if (confirmPassword.trim() === password.trim()) {
    //             setIsPasswordValid(true);
    //         }
    //         else {
    //             setIsPasswordValid(false);
    //         }
    //     }, 150);

	// 	return () => clearTimeout(timer);
	// }, [confirmPassword, password]);

	// check on change of username, password, confirm password and toggle
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

	const focusHandler = () => {
		setShowLoginError(true);
	};

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
				{!toggle && (
					<span className={styles.errortext}>
						{/* Username has been taken */}
					</span>
				)}
				<LoginInput
					label="Password"
					type="password"
					value={password}
					onChange={passwordHandler}
					onFocus={focusHandler}
				/>
				{!toggle && (
					<>
						<LoginError
							error={error}
							showLoginError={showLoginError}
						/>
						<LoginInput
							label="Confirm password"
							type="password"
							value={confirmPassword}
							onChange={confirmPasswordHandler}
						/>
						{!toggle && (
							<span className={styles.errortext}>
								{/* Passwords do not match */}
							</span>
						)}
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
