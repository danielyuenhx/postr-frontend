import React, { useState, useEffect } from 'react';
import LetteredAvatar from 'react-lettered-avatar';

import PostForm from './PostForm';
import LoginForm from './LoginForm';

import styles from './InfoSection.module.css';
import EventInfo from './EventInfo';
import Line from '../../UI/Line';
import RecentlyJoined from './RecentlyJoined';

const InfoSection = () => {
  // check if user is logged in
  const item = localStorage.getItem('profile');
  const profile = item === null ? null : JSON.parse(item);

  const [winWidth, setWinWidth] = useState(0);

  useEffect(() => {
    const onResize = () => {
      setWinWidth(window.innerWidth);
    };

    onResize();

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [window.innerWidth]);

  return (
    <div className={styles.container}>
      {profile ? (
        <PostForm
          username={profile.result.username}
          picture={profile.result.picture}
        />
      ) : (
        <LoginForm />
      )}
      {winWidth > 600 && <Line />}
      <h3 style={{ fontWeight: 200, letterSpacing: '0.05rem' }}>
        Announcements
      </h3>
      <EventInfo />
      {/* <RecentlyJoined /> */}
      <p className={styles.muted}>
        <a href='about'>About</a> ·{' '}
        <a href='https://github.com/danielyuenhx/postr'>GitHub</a>
      </p>
      <p className={styles.muted}>© 2022 postr</p>
      {winWidth <= 600 && <Line />}
    </div>
  );
};

export default InfoSection;
