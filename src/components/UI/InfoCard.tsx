import React from 'react';

import styles from './InfoCard.module.css';

const InfoCard = (props: { children?: React.ReactNode }) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default InfoCard;
