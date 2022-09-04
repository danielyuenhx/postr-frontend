import React from 'react';

import LoginErrorText from './LoginErrorText';

import styles from './LoginError.module.css';

type Props = {
	error: { eight: boolean; uppercase: boolean; number: boolean };
	showLoginError: boolean;
};

const LoginError = (props: Props) => {
	return (
		<div
			className={`${styles.card} ${props.showLoginError && styles.show}`}
		>
			<p>Your password should:</p>
			<ul>
				<LoginErrorText pass={props.error.eight}>
					be at least 8 characters or longer.
				</LoginErrorText>
				<LoginErrorText pass={props.error.uppercase}>
					contain at least one uppercase letter.
				</LoginErrorText>
				<LoginErrorText pass={props.error.number}>
					contain at least one number (0-9).
				</LoginErrorText>
			</ul>
		</div>
	);
};

export default LoginError;
