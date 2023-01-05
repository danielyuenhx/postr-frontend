import React, { useEffect, useState } from 'react';

import logo from '../../images/onlytext.png';

import styles from './AboutPage.module.css';
import Camera from './icons/Camera';
import Chat from './icons/Chat';
import Compass from './icons/Compass';
import Martini from './icons/Martini';
import Heart from './icons/Heart';
import Location from './icons/Location';
import Mail from './icons/Mail';
import Navigation from './icons/Navigation';
import Movable from './Movable';

const AboutPage = () => {
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);

  useEffect(() => {
    const parallax = (e: MouseEvent) => {
      setPageX(e.pageX);
      setPageY(e.pageY);
    };

    window.addEventListener('mousemove', parallax);
    return () => window.removeEventListener('mousemove', parallax);
  }, [window.innerWidth]);

  return (
    <div className={styles.container}>
      <Movable
        icon={<img src={logo} />}
        position={[]}
        pageX={pageX}
        pageY={pageY}
        offsetSpeed={1}
        zIndex={1000}
      />
      <div className={styles.icons}>
        <Movable
          icon={<Chat />}
          position={[350, 200]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={3}
        />
        <Movable
          icon={<Camera />}
          position={[250, 400]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={3}
        />
        <Movable
          icon={<Compass />}
          position={[600, 600]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={-5}
        />
        <Movable
          icon={<Heart />}
          position={[900, 570]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={-7}
        />
        <Movable
          icon={<Location />}
          position={[1150, 550]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={-4}
        />
        <Movable
          icon={<Mail />}
          position={[1150, 300]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={3}
        />
        <Movable
          icon={<Navigation />}
          position={[800, 150]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={5}
        />
        <Movable
          icon={<Martini />}
          position={[600, 350]}
          pageX={pageX}
          pageY={pageY}
          offsetSpeed={-7}
        />
      </div>
    </div>
  );
};

export default AboutPage;
