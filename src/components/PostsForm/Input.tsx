import React from 'react';

import styles from './Input.module.css';

type Props = { title: string; titlePlaceholder: string };

const Input = (props: Props) => {
	return (
		<div>
			<label htmlFor="input" className={styles.title}>
				{props.title}
			</label>
			<input placeholder={props.titlePlaceholder} type="text" id="input" className={styles.input} />
		</div>
	);
};

export default Input;
