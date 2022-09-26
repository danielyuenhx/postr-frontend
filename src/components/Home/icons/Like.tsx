import React, { useState, useRef, useEffect } from 'react';

import styles from './Like.module.css';

const Like = (props: { isLoggedIn: boolean; onClick: () => void }) => {
	const [isLiked, setIsLiked] = useState('first');

	const likeHandler = (event: React.MouseEvent<SVGSVGElement>) => {
		if (isLiked === 'liked') {
			setIsLiked('unliked');
		} else {
			setIsLiked('liked');
		}
        props.onClick();
	};

	return (
		<svg
			className={`${styles.heart} ${
				isLiked === 'first'
					? ''
					: isLiked === 'liked'
					? styles.like
					: styles.unlike
			}`}
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			stroke="currentColor"
			onClick={props.isLoggedIn ? likeHandler : () => {}}
		>
			<path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
		</svg>
	);
};

export default Like;
