import React from 'react';
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

  return (
    <div className={styles.container}>
      {profile ? (
        <PostForm username={profile.result.username} />
      ) : (
        <LoginForm />
      )}
      <Line />
      {/* <h3 style={{fontWeight: 200}}>Announcements</h3> */}
      <EventInfo />
      <RecentlyJoined />
			<p className={styles.copyright}>© 2022 postr</p>  
    </div>
  );
};

export default InfoSection;
