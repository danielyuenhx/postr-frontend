import React from 'react';
import LetteredAvatar from 'react-lettered-avatar';
import { Link } from 'react-router-dom';

import PostForm from './PostForm';

import logo from '../../../images/only-logo-full.png';

import styles from './InfoSection.module.css';

const placeholders = [
  "What's up?",
  'Write something...',
  'Post something...',
  "What's happening?",
  'Create post...',
  "What's going on?",
  'Share something...',
  "What's on your mind?",
];

const InfoSection = () => {
  // check if user is logged in
  const item = localStorage.getItem('profile');
  const profile = item === null ? null : JSON.parse(item);

  const placeholder =
    placeholders[Math.floor(Math.random() * placeholders.length)];

  return (
    <>
      {profile ? (
        <PostForm username={profile.result.username} />
      ) : (
        <div className={styles.card}>
          <div className={styles.login}>
            <div className={styles.logo}>
              <img src={logo} />
            </div>
            <p style={{ textAlign: 'center' }}>Log in to post something!</p>
            <Link to='/login'>
              <button className={styles.button}>Login</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoSection;
