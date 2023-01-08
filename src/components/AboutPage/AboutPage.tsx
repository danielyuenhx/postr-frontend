import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

import Animation from './Animation';

import logo from '../../images/only-logo-full.png';
import github from '../../images/github.png';

import styles from './AboutPage.module.css';

const cardVariants: Variants = {
  offscreen: {
    // y: 300,
    x: -500,
  },
  onscreen: {
    x: 0,
    // y: 50,
    y: 0,
    rotate: -0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.5,
    },
  },
};

const AboutPage = () => {
  return (
    <>
      <Animation />
      <div className={styles.container}>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true }}
          className={styles.about}
          variants={cardVariants}
        >
          <img src={logo} className={styles.logo} />
          <h1>About Postr</h1>
          Welcome to Postr, a social media website to share stories 📖, updates
          📣 and pictures 📷 with the rest of the community! Drawing influences
          from other social media giants, Postr is mainly heavily inspired by
          Reddit, Twitter and Instagram.<br></br>
          <br></br> Postr was made with the intention of being a fun little
          personal project to improve my web development skills. Built by myself
          during my free time with no clear direction to be considered complete,
          it slowly became a passion project to try and include as many cool
          little features as possible. Finally, I feel like it's time to
          consider this project completed. It's far from perfect, but I
          definitely learned a lot building Postr, and I am very happy with how
          it turned out. Thank you for taking the time to check it out!<br></br>
          <br></br>Check out my GitHub here:<br></br>
          <br></br>
          <a href='https://github.com/danielyuenhx'>
            <motion.img
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              src={github}
              style={{ width: '2.5rem', cursor: 'pointer' }}
            />
          </a>
          <br></br>
          <br></br>
          <p>© 2022 postr by Daniel Yuen</p>
        </motion.div>
      </div>
    </>
  );
};

export default AboutPage;
