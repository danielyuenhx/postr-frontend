import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'react-simple-snackbar';

import LoginInput from './LoginInput';
import LoginError from './LoginError';
import LoginButton from './LoginButton';

import { createUser } from '../../../actions/auth-actions';
import { useAppDispatch } from '../../../hooks/hooks';

import styles from './SignUpSection.module.css';

type Props = { onLoading: (status: boolean) => void };

const SignUpSection = (props: Props) => {
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
	const [showConfirmError, setShowConfirmError] = useState(false);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [openSnackbar, closeSnackbar] = useSnackbar();

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		document.body.style.cursor = 'progress';
		document.documentElement.style.cursor = 'progress';
		props.onLoading(true);

		// sign up the user
		const error = await dispatch(
			createUser({ username, password, confirmPassword })
		);
		if (error) {
			openSnackbar(error, [5000]);
		} else {
			openSnackbar('Successfully created user!', [5000]);
			navigate('/');
		}

		document.body.style.cursor = 'default';
		document.documentElement.style.cursor = 'default';
		props.onLoading(false);
	};

	const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);

		// clearTimeout(timeout);
		// timeout = setTimeout(checkUsername, 2000);
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
		setShowConfirmError(true);
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
		if (
			username.trim().length > 0 &&
			password.trim().length > 7 &&
			confirmPassword.trim().length > 0 &&
			password.trim() === confirmPassword.trim()
		) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}, [username, password, confirmPassword]);

	const loginFocusHandler = () => {
		setShowLoginError(true);
	};

	return (
		<form onSubmit={submitHandler}>
			<LoginInput
				label="Username"
				type="text"
				value={username}
				onChange={usernameHandler}
			/>
			<span className={styles.errortext}>
				{/* Username has been taken */}
			</span>
			<LoginInput
				label="Password"
				type="password"
				value={password}
				onChange={passwordHandler}
				onFocus={loginFocusHandler}
			/>
			<LoginError error={error} showLoginError={showLoginError} />
			<LoginInput
				label="Confirm password"
				type="password"
				value={confirmPassword}
				onChange={confirmPasswordHandler}
			/>
			{showConfirmError && password !== confirmPassword && (
				<span className={styles.errortext}>Passwords do not match</span>
			)}
			<LoginButton
				label={'Sign Up'}
				// non-empty username and password && (login || (register && fulfill requirements))
				isValid={isValid && Object.values(error).every(Boolean)}
			/>
		</form>
	);
};

export default SignUpSection;
