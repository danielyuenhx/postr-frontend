import React, { useState } from 'react';

import styles from './LoginInput.module.css';

type Props = { label: string, type: string }

const LoginInput = (props: Props) => {
	const [value, setValue] = useState('');

    console.log(props.label);

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<div className={styles.container}>
			<label className={value && styles.filled}>{props.label}</label>
			<input type={props.type} value={value} onChange={onChangeHandler} />
		</div>
	);
};

export default LoginInput;
