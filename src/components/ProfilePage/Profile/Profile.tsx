import React, { useEffect, useRef, useState } from 'react';
import LetteredAvatar from 'react-lettered-avatar';
import moment from 'moment';
import { useSnackbar } from 'react-simple-snackbar';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import FileBase from 'react-file-base64';

import Heart from '../icons/Heart';
import Write from '../icons/Write';
import Birthday from '../icons/Birthday';
import { useAppDispatch } from '../../../hooks/hooks';
import { deleteUser, updatePicture } from '../../../actions/users-actions';
import { authActions } from '../../../store/auth-slice';

import styles from './Profile.module.css';
import Icon from '../icons/Icon';

type User = {
  username: string;
  createdAt: string;
  totalPosts: number;
  totalLikes: number;
  picture: string;
};

const Profile = (props: { user: User; isLoading: boolean }) => {
  const item = localStorage.getItem('profile');
  const profile = item === null ? null : JSON.parse(item);

  const dispatch = useAppDispatch();
  const [openSnackbar, closeSnackbar] = useSnackbar();
  const navigate = useNavigate();

  const saveHandler = async () => {
    document.body.style.cursor = 'progress';
    document.documentElement.style.cursor = 'progress';

    if (profile.result.username === props.user.username) {
      const error = await dispatch(
        updatePicture(profile.result.id, selectedFile)
      );
      if (error) {
        openSnackbar(error, [5000]);
      } else {
        window.location.reload();
        sessionStorage.setItem(
          'reload',
          'Successfully saved new profile picture!'
        );
      }
    }

    document.body.style.cursor = 'default';
    document.documentElement.style.cursor = 'default';
  };

  const [fileName, setFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  // VERY BAD PRACTICE BECAUSE NOT USING VIRTUAL DOM
  // but library used does not offer much customisation
  // already submitted pull request but no recent moderation
  useEffect(() => {
    document
      .getElementById('filebaseDiv')
      ?.firstElementChild?.setAttribute('id', 'filebase');
  }, [document.getElementById('filebaseDiv')]);

  useEffect(() => {
    const input = document.getElementById('filebase') as HTMLInputElement;
    if (input) {
      const path = input.value.split('\\');
      setFileName(input.value.split('\\')[path.length - 1]);
    }
  }, [document.getElementById('filebaseDiv'), selectedFile]);

  return (
    <div className={styles.container}>
      {!props.isLoading ? (
        <>
          <div className={styles.avatar}>
            {profile && profile.result.username === props.user.username && (
              <div id='filebaseDiv'>
                <FileBase
                  type='image'
                  multiple={false}
                  onDone={({ base64 }: { base64: string }) =>
                    setSelectedFile(base64)
                  }
                />
                <label htmlFor='filebase'>
                  <div className={styles.avatarOverlay}>
                    <Icon />
                  </div>
                </label>
              </div>
            )}
            {selectedFile ? (
              <img className={styles.avatarPicture} src={selectedFile} />
            ) : (
              props.user.picture ? (
                <img className={styles.avatarPicture} src={props.user.picture} />
              ) : (
                <LetteredAvatar name={props.user.username} size={60} />
              )
            )}
          </div>
          <h2>{props.user.username}</h2>
          <p className={styles.fromNow}>
            Joined {moment(props.user.createdAt).fromNow()}
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <p>Created</p>
              <div>
                <Birthday />
                <span>
                  {moment(props.user.createdAt).format('MMMM DD, YYYY')}
                </span>
              </div>
            </div>
            <div className={styles.smallStats}>
              <div className={styles.stat}>
                <p>Likes</p>
                <div>
                  <Heart /> <span>{props.user.totalLikes}</span>
                </div>
              </div>
              <div className={styles.stat}>
                <p>Posts</p>
                <div>
                  <Write /> <span>{props.user.totalPosts}</span>
                </div>
              </div>
            </div>
          </div>
          {profile && profile.result.username === props.user.username && (
            <>
              <Link to='/create' style={{ width: '100%' }}>
                <button className={styles.create}>Create a post</button>
              </Link>
              {selectedFile && (
                <button onClick={saveHandler} className={styles.save}>
                  Save
                </button>
              )}
            </>
          )}
        </>
      ) : (
        <div className={styles.spinner}>
          <TailSpin color='#1083FD' width={50} ariaLabel='loading' />{' '}
        </div>
      )}
    </div>
  );
};

export default Profile;
