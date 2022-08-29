import React, { useState } from 'react';

import styles from './LoginInput.module.css';

const LoginInput = () => {
	const [value, setValue] = useState('');

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<div className={styles.container}>
			<label className={value && styles.filled}>Label</label>
			<input type="text" value={value} onChange={onChangeHandler} />
		</div>
	);
};

export default LoginInput;
