import React from 'react';
import ReactCanvasConfetti from "react-canvas-confetti";

import InfoCard from '../../UI/InfoCard';
import FireworksCanvas from './FireworksCanvas';

import styles from './Info.module.css'

const Info = () => {
  return <InfoCard>
    <div className={styles.picture} />
    <p className={styles.title}>Happy New Year!</p>
    <p className={styles.details}>Happy new year from everyone at postr which, unfortunately, is just me. 🎉🎇</p>
    <FireworksCanvas />
  </InfoCard>;
};

export default Info;
