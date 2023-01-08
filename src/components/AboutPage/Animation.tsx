import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import logo from '../../images/onlytext.png';

import styles from './Animation.module.css';
import Movable from './Movable';

import {
  Chat,
  Camera,
  Compass,
  Martini,
  Heart,
  Location,
  Mail,
  Navigation,
  Clock,
  Present,
  Cart,
  Save,
  Click,
  Movie,
  Music,
  Headphones,
  Star,
} from './Icons';

const Animation = () => {
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);

  const [winWidth, setWinWidth] = useState(0);
  const [winHeight, setWinHeight] = useState(0);

  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    let tempPageX: number;
    let tempPageY: number;

    const onMouseMove = (e: MouseEvent) => {
      tempPageX = e.pageX;
      tempPageY = e.pageY;
      requestAnimationFrame(updatePageValues);
    };

    const updatePageValues = () => {
      setPageX(tempPageX);
      setPageY(tempPageY);
    };

    const onResize = () => {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
      if (window.innerWidth <= 1024) {
        setMultiplier(2 / 3);
      } else {
        setMultiplier(1);
      }
    };

    onResize();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, [window.innerWidth]);

  return (
    <div className={styles.container}>
      <div className={styles.vignette} />
      <Movable
        icon={
          <>
            <img src={logo} />
            <div
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
              // transition={{ ease: 'easeInOut'}}
            >
              <a href='/' className={styles.click}>
                Get Started
              </a>
            </div>
          </>
        }
        position={[]}
        pageX={pageX}
        pageY={pageY}
        offsetSpeed={1}
        zIndex={1000}
        width={`${30 * multiplier}rem`}
      />
      {/* <Movable
        icon={<img src={logo} />}
        position={[]}
        pageX={pageX}
        pageY={pageY}
        offsetSpeed={1}
        zIndex={1000}
        width={`${30 * multiplier}rem`}
      />
      <Movable
        icon={
          <a href='/' className={styles.click}>
            Get Started
          </a>
        }
        position={[]}
        pageX={pageX}
        pageY={pageY}
        offsetSpeed={1}
        zIndex={10000}
        width={`${20 * multiplier}rem`}
      /> */}
      {(winWidth > 650 && winHeight > 650) && <div className={styles.icons}>
        <Movable
          icon={<Chat />}
          position={[winWidth * 20, winHeight * 12]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={1.5}
          width={`${250 * multiplier}px`}
        />
        <Movable
          icon={<Camera />}
          position={[winWidth * 10, winHeight * 40]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={3}
          width={`${175 * multiplier}px`}
        />
        <Movable
          icon={<Compass />}
          position={[winWidth * 30, winHeight * 55]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={-7}
          width={`${130 * multiplier}px`}
        />
        <Movable
          icon={<Heart />}
          position={[winWidth * 50, winHeight * 67]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={2}
          width={`${200 * multiplier}px`}
        />
        <Movable
          icon={<Location />}
          position={[winWidth * 75, winHeight * 55]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={-6}
          width={`${100 * multiplier}px`}
        />
        <Movable
          icon={<Mail />}
          position={[winWidth * 70, winHeight * 25]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={5}
          width={`${150 * multiplier}px`}
        />
        <Movable
          icon={<Navigation />}
          position={[winWidth * 50, winHeight * 30]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={-6}
          width={`${75 * multiplier}px`}
        />
        <Movable
          icon={<Martini />}
          position={[winWidth * 40, winHeight * 40]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={-4}
          width={`${100 * multiplier}px`}
        />
        <Movable
          icon={<Clock />}
          position={[winWidth * 65, winHeight * 45]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={-5}
          width={`${125 * multiplier}px`}
        />
        <Movable
          icon={<Present />}
          position={[winWidth * 55, winHeight * 10]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={2}
          width={`${200 * multiplier}px`}
        />
        <Movable
          icon={<Cart />}
          position={[winWidth * 65, winHeight * 60]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={5}
          width={`${200 * multiplier}px`}
        />
        <Movable
          icon={<Save />}
          position={[winWidth * 17.5, winHeight * 65]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={2.5}
          width={`${150 * multiplier}px`}
        />
        <Movable
          icon={<Click />}
          position={[winWidth * 40, winHeight * 75]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={-3.5}
          width={`${100 * multiplier}px`}
        />
        {/* <Movable
          icon={<Movie />}
          position={[winWidth*15, winHeight*20]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={5}
          width="100px"
        /> */}
        {/* <Movable
          icon={<Music />}
          position={[winWidth*80, winHeight*65]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={6}
          width="125px"
        /> */}
        {/* <Movable
          icon={<Headphones />}
          position={[winWidth*17.5, winHeight*65]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={2.5}
          width="150px"
        /> */}
      </div>}
    </div>
  );
};

export default Animation;
