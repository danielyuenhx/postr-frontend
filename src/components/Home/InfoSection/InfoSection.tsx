import React from 'react';
import LetteredAvatar from 'react-lettered-avatar';

import PostForm from './PostForm';
import LoginForm from './LoginForm';

import styles from './InfoSection.module.css';
import Info from './Info';

const InfoSection = () => {
  // check if user is logged in
  const item = localStorage.getItem('profile');
  const profile = item === null ? null : JSON.parse(item);

  return (
    <div className={styles.container}>
      {profile ? (
        <PostForm username={profile.result.username} />
      ) : (
        <LoginForm />
      )}
      <Info />
			<p className={styles.copyright}>© 2022 postr</p>  
    </div>
  );
};

export default InfoSection;
