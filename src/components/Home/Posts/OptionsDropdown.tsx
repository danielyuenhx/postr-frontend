import React from 'react';
import { motion } from 'framer-motion';

import Delete from '../icons/Delete';
import Pin from '../icons/Pin';

import styles from './OptionsDropdown.module.css';

type Props = { deleteHandler: () => void };

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
					<li>
						<Pin />
						Pin to profile
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
