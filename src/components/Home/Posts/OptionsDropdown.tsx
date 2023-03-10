import React from 'react';
import { motion } from 'framer-motion';

import Delete from '../icons/Delete';
import Pin from '../icons/Pin';

import styles from './OptionsDropdown.module.css';

type Props = {
	isPinned: boolean;
	deleteHandler: () => void;
	pinHandler: () => void;
};

const OptionsDropdown = React.forwardRef(
	(props: Props, ref: React.Ref<HTMLDivElement>) => {
		return (
			<motion.div
				initial={{ opacity: 0, y: '-50%' }}
				animate={{ opacity: 1, y: '0%' }}
				exit={{ opacity: -1, y: '-50%' }}
				className={styles.container}
				ref={ref}
			>
				<ul>
					<li onClick={props.pinHandler}>
						<Pin />
						{!props.isPinned
							? 'Pin to profile'
							: 'Unpin post'}
					</li>
					<li onClick={props.deleteHandler}>
						<Delete />
						Delete
					</li>
				</ul>
			</motion.div>
		);
	}
);

export default OptionsDropdown;
