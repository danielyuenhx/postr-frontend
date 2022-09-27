import React, { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './Like.module.css';

const Like = (props: {
	isLoggedIn: boolean;
	isLikedByUser: boolean;
	onClick: () => void;
}) => {
	const [initialState, setInitialState] = useState(true);
	const [isLiked, setIsLiked] = useState(props.isLikedByUser);

	const likeHandler = async (event: React.MouseEvent<SVGSVGElement>) => {
		await props.onClick();
		if (isLiked) {
			setIsLiked(false);
		} else {
			setIsLiked(true);
		}
        setInitialState(false)
	};

	return (
		<motion.svg
			whileHover={{ scale: 1.125 }}
			whileTap={{ scale: 0.9 }}
			className={`${styles.heart} ${
				isLiked ? styles.like : styles.unlike
			} ${initialState ? styles.pageload : ''}`}
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			stroke="currentColor"
			onClick={props.isLoggedIn ? likeHandler : () => {}}
		>
			<path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
		</motion.svg>
	);
};

export default Like;
