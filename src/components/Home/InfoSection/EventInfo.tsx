import React from 'react';
import { motion } from 'framer-motion';

import InfoCard from '../../UI/InfoCard';
import FireworksCanvas from './FireworksCanvas';

import styles from './EventInfo.module.css';

const EventInfo = () => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 1 }}>
      <InfoCard style={{ cursor: 'pointer' }}>
        <div className={styles.picture} />
        <p className={styles.title}>Happy New Year!</p>
        <p className={styles.details}>
          Happy New Year from everyone at postr which, unfortunately, is just
          me. 🎉🎇
        </p>
        <FireworksCanvas />
        {/* <img src={logo} className={styles.textImg} /> */}
      </InfoCard>
    </motion.div>
  );
};

export default EventInfo;
