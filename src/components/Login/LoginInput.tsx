import React, { useState } from 'react';

import styles from './LoginInput.module.css';

type Props = {
	label: string;
	type: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginInput = (props: Props) => {
	return (
		<div className={styles.container}>
			<label className={props.value && styles.filled}>{props.label}</label>
			<input
				type={props.type}
				value={props.value}
				onChange={props.onChange}
			/>
		</div>
	);
};

export default LoginInput;
