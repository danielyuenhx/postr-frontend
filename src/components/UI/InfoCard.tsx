import React from 'react';

import styles from './InfoCard.module.css';

const InfoCard = (props: { children?: React.ReactNode; style?: {} }) => {
  return (
    <div className={styles.card} style={props.style}>
      {props.children}
    </div>
  );
};

export default InfoCard;
