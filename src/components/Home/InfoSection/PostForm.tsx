import React from 'react';
import LetteredAvatar from 'react-lettered-avatar';
import { Link } from 'react-router-dom';
import InfoCard from '../../UI/InfoCard';

import styles from './PostForm.module.css';

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

const PostForm = (props: { username: string }) => {
  const placeholder =
    placeholders[Math.floor(Math.random() * placeholders.length)];

  return (
    <InfoCard>
      <form>
        <Link to={`/profile/${props.username}`} className={styles.user}>
          <div className={styles.avatar}>
            <LetteredAvatar name={props.username} size={20} />
          </div>
          <label htmlFor='input'>{props.username}</label>
        </Link>
        <Link to='/create' className={styles.textarea}>
          <input
            placeholder={placeholder}
            type='text'
            id='input'
            className={styles.input}
            disabled
          />
        </Link>
      </form>
    </InfoCard>
  );
};

export default PostForm;
