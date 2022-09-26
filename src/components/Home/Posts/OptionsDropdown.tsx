import React from 'react';

import Delete from '../icons/Delete';
import Pin from '../icons/Pin';

import styles from './OptionsDropdown.module.css';

type Props = { deleteHandler: () => void };

const OptionsDropdown = React.forwardRef(
	(props: Props, ref: React.Ref<HTMLDivElement>) => {
		return (
			<div className={styles.container} ref={ref}>
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
			</div>
		);
	}
);

export default OptionsDropdown;
