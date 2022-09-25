import React, { useState } from 'react';

import styles from './Like.module.css';

const Upvote = () => {
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = (event: React.MouseEvent<SVGSVGElement>) => {
        if (isLiked) {
            setIsLiked(false);
        }
        else {
            setIsLiked(true);
        }
    }
	return (
		<svg
			className={`${styles.heart} ${isLiked ? styles.like : styles.unlike}`}
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			stroke="currentColor"
            onClick={likeHandler}
		>
			<path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
		</svg>
	);
};

export default Upvote;
