import React from 'react';
import logo from '../../images/postr-logo.png';
// #1390F4

const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full h-20 flex justify-between items-center px-[10%] shadow-md">
			{/* <h1 className="font-bold">postr</h1> */}
			<img src={logo} alt="logo" className="w-28" />
		</header>
	);
};

export default Header;
