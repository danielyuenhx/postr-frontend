import React from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

import InfoCard from '../../UI/InfoCard';
import FireworksCanvas from './FireworksCanvas';

import logo from '../../../images/onlytext.png';

import styles from './EventInfo.module.css';

const EventInfo = () => {
  return (
    <InfoCard>
      <div className={styles.picture} />
      <p className={styles.title}>Happy New Year!</p>
      <p className={styles.details}>
        Happy New Year from everyone at postr which, unfortunately, is just me.
        🎉🎇
      </p>
      <FireworksCanvas />
      {/* <img src={logo} className={styles.textImg} /> */}
    </InfoCard>
  );
};

export default EventInfo;
