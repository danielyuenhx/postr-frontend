import React, { useState } from 'react';

import Hidden from './icons/Hidden';
import Visible from './icons/Visible';

import styles from './LoginInput.module.css';

type Props = {
	label: string;
	type: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
};

const LoginInput = (props: Props) => {
	const [isHidden, setIsHidden] = useState(true);

	return (
		<div className={styles.container}>
			<label 
				className={props.value && styles.filled}
			>
				{props.label}
			</label>
			<input 
				type={isHidden ? props.type : 'text'}
				value={props.value}
				onChange={props.onChange}
                className={props.type === 'password' ? styles.password : ''}
                onFocus={props.onFocus}
			/>
			{props.type === 'password' && (
				<div className={styles.hide}>
					{isHidden && <Hidden onClick={setIsHidden} />}
					{!isHidden && <Visible onClick={setIsHidden} />}
				</div>
			)}
		</div>
	);
};

export default LoginInput;
