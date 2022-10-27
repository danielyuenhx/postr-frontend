import React from 'react';

const Wave = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height={120}
			viewBox="0 0 1440 320"
      style={{position: "absolute", zIndex: -1}}
		>
			<path
				fill="#3f3d56"
				fill-opacity="1"
				d="M0,96L40,90.7C80,85,160,75,240,69.3C320,64,400,64,480,69.3C560,75,640,85,720,80C800,75,880,53,960,58.7C1040,64,1120,96,1200,117.3C1280,139,1360,149,1400,154.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
			></path>
		</svg>
	);
};

export default Wave;
