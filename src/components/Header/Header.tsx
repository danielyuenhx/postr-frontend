import React from 'react';
// import logo from '../../images/postr-logo.png';
import logo from '../../images/logo.png';
import DarkModeToggle from 'react-dark-mode-toggle';
// #1390F4

const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full h-16 flex justify-between items-center px-[5%] shadow-md">
			{/* <h1 className="font-bold">postr</h1> */}
			<div className="flex">
				{/* <img src={logo} alt="logo" className="w-28 pr-8" /> */}
				<form action="submit">
					<input type="text" placeholder="Search..." className="w-full rounded shadow-sm p-1 border-gray-300 focus:outline-none focus:border-indigo-500" />
                    <button type="submit">
                    </button>
				</form>
			</div>
			<nav>
				<ul className="flex items-center [&_li]:ml-12 [&_li]:cursor-pointer">
					<li>Home</li>
					<li>Notifications</li>
					<li>Profile</li>
					<li>Log in</li>
					{/* <li><DarkModeToggle size={50} /></li> */}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
