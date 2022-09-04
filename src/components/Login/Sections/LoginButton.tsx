import React from 'react';

import styles from './LoginButton.module.css';

type Props = { label: string; isValid: boolean };

const LoginButton = (props: Props) => {
	return (
		<button
			type="submit"
			className={`${styles.button} ${
				props.isValid ? styles.enabled : styles.disabled
			}`}
		>
			{props.label}
		</button>
	);
};

export default LoginButton;
