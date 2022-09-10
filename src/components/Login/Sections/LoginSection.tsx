import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginInput from './LoginInput';
import LoginButton from './LoginButton';

import { useAppDispatch } from '../../../hooks/hooks';
import { loginUser } from '../../../actions/auth-actions';

import styles from './LoginSection.module.css';

type Props = { onToggle: (status: boolean) => void };

const LoginSection = (props: Props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [isValid, setIsValid] = useState(false);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		document.body.style.cursor = 'progress';
		document.documentElement.style.cursor = 'progress';

		const res = await dispatch(loginUser({ username, password }));
		if (res !== 404) {
			navigate('/');
		}
		document.body.style.cursor = 'default';
		document.documentElement.style.cursor = 'default';
	};

	const usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
	};

	const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	// check on change of username, password, confirm password and toggle
	useEffect(() => {
		if (username.trim().length > 0 && password.trim().length > 7) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}, [username, password]);

	return (
		<form onSubmit={submitHandler}>
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
			<p className={styles.signup}>
				Don't have an account?{' '}
				<span onClick={props.onToggle.bind(null, false)}>Sign up</span>
			</p>
			<LoginButton
				label={'Login'}
				// non-empty username and password && (login || (register && fulfill requirements))
				isValid={isValid}
			/>
		</form>
	);
};

export default LoginSection;
