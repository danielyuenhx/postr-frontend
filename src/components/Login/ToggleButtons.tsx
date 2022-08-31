import React from 'react';

import styles from './ToggleButtons.module.css'

type Props = { toggle: boolean, toggleHandler: (status: boolean) => void}

const ToggleButtons = (props: Props) => {
    const { toggle, toggleHandler } = props;

	return (
		<div className={styles.entire}>
			<div className={styles.buttons}>
				<button
					className={styles.leftButton}
					onClick={toggleHandler.bind(null, true)}
					style={!toggle ? { color: '#bbbbbb' } : {}}
				>
					Login
				</button>
				<button
					className={styles.rightButton}
					onClick={toggleHandler.bind(null, false)}
					style={toggle ? { color: '#bbbbbb' } : {}}
				>
					Sign Up
				</button>
			</div>
			<div
				className={`${styles.line} ${
					toggle ? styles.leftLine : styles.rightLine
				}`}
			></div>
		</div>
	);
};

export default ToggleButtons;
