import React, { useRef, useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

import ToggleButtons from './ToggleButtons';
import LoginSection from './Sections/LoginSection';
import SignUpSection from './Sections/SignUpSection';

import styles from './Login.module.css';

const Login = () => {
	const [toggle, setToggle] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [cardHeight, setCardHeight] = useState(100);

	const toggleHandler = (status: boolean) => {
		setToggle(status);
	};

    const loadingHandler = (status: boolean) => {
        setIsLoading(status);
    };

    const cardRef = useRef<HTMLDivElement>(null);

    // maintains the height of the div during loading spinner
    useEffect(() => {
        const cardHeight = cardRef.current?.clientHeight
        if (!isLoading) {
            setCardHeight(cardHeight || 100);
        }
    }, [isLoading])
    

	return (
		<div className={styles.card} ref={cardRef} style={!isLoading ? {height: "100%"} : {height: `${cardHeight}px`}}>
            {isLoading ? <TailSpin
                color='#1083FD'
                width={50}
                ariaLabel="loading"
            /> : <>
			<ToggleButtons toggle={toggle} toggleHandler={toggleHandler} />
            {toggle ? <LoginSection onToggle={toggleHandler} onLoading={loadingHandler} /> : <SignUpSection onLoading={loadingHandler} />}
            </>}
		</div>
	);
};

export default Login;
