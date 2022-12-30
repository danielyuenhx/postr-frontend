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
    const cardHeight = cardRef.current?.clientHeight;
    if (!isLoading) {
      setCardHeight(cardHeight || 100);
    }
  }, [isLoading]);

  return (
    <div className={styles.container}>
      <div
        className={styles.card}
        ref={cardRef}
        style={!isLoading ? {} : { height: `${cardHeight}px` }}
      >
        {isLoading ? (
          <div className={styles.spinner}>
            <TailSpin color='#1083FD' width={50} ariaLabel='loading' />{' '}
          </div>
        ) : (
          <>
            <ToggleButtons toggle={toggle} toggleHandler={toggleHandler} />
            {toggle ? (
              <LoginSection
                onToggle={toggleHandler}
                onLoading={loadingHandler}
              />
            ) : (
              <SignUpSection onLoading={loadingHandler} />
            )}
          </>
        )}
      </div>
      <svg
        className={styles.waves}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#f3f4f5'
          fill-opacity='0.5'
          d='M0,64L21.8,101.3C43.6,139,87,213,131,213.3C174.5,213,218,139,262,112C305.5,85,349,107,393,112C436.4,117,480,107,524,90.7C567.3,75,611,53,655,53.3C698.2,53,742,75,785,106.7C829.1,139,873,181,916,181.3C960,181,1004,139,1047,138.7C1090.9,139,1135,181,1178,186.7C1221.8,192,1265,160,1309,165.3C1352.7,171,1396,213,1418,234.7L1440,256L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z'
        ></path>
      </svg>
      <svg
        className={styles.waves}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#f3f4f5'
          fill-opacity='1'
          d='M0,288L21.8,282.7C43.6,277,87,267,131,256C174.5,245,218,235,262,202.7C305.5,171,349,117,393,122.7C436.4,128,480,192,524,229.3C567.3,267,611,277,655,261.3C698.2,245,742,203,785,202.7C829.1,203,873,245,916,234.7C960,224,1004,160,1047,165.3C1090.9,171,1135,245,1178,240C1221.8,235,1265,149,1309,112C1352.7,75,1396,85,1418,90.7L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z'
        ></path>
      </svg>
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Login;
