import React from 'react';

import Check from './icons/Check';
import Cross from './icons/Cross';

import styles from './LoginErrorText.module.css';

type Props = { children: React.ReactNode; pass: boolean };

const LoginErrorText = (props: Props) => {
	return (
		<li className={props.pass ? styles.pass : styles.fail}>
			<div className={styles.inner}>
				{props.pass ? <Check /> : <Cross />}
				<p>{props.children}</p>
			</div>
		</li>
	);
};

export default LoginErrorText;
