import React, { useState, useRef, useEffect } from 'react';
import LetteredAvatar from 'react-lettered-avatar';
import ReactHtmlParser from 'react-html-parser';
import { useSnackbar } from 'react-simple-snackbar';
import { AnimatePresence } from 'framer-motion';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';

import Like from '../icons/Like';
import Options from '../icons/Options';
import Pin from '../icons/Pin';

import OptionsDropdown from './OptionsDropdown';
import { useAppDispatch } from '../../../hooks/hooks';
import { deletePost, likePost } from '../../../actions/posts-actions';
import { pinPost } from '../../../actions/users-actions';

import styles from './Post.module.css';
import Line from '../../UI/Line';

type Post = {
  _id: string;
  user: string;
  title: string;
  content: string;
  tags: string;
  selectedFile: string;
  likes: [string];
  createdAt: Date;
  picture: string;
};

const Post = (props: { post: Post; key: string; isPinned: boolean }) => {
  // show snackbar AFTER reload
  window.onload = () => {
    const message = sessionStorage.getItem('reload');
    if (message) {
      openSnackbar(message, [2500]);
      sessionStorage.removeItem('reload');
    }
  };

  const item = localStorage.getItem('profile');
  const profile = item === null ? null : JSON.parse(item);

  const post = props.post;

  const dispatch = useAppDispatch();
  const [openSnackbar] = useSnackbar();

  const likeHandler = async () => {
    await dispatch(likePost(post._id));
  };

  const pinHandler = async () => {
    const error = await dispatch(pinPost(profile?.result?.id, post._id));
    if (error) {
      openSnackbar(error, [5000]);
    } else {
      window.location.reload();
      sessionStorage.setItem('reload', 'Post pinned!');
    }
  };

  const unpinHandler = async () => {
    const error = await dispatch(pinPost(profile?.result?.id, ''));
    if (error) {
      openSnackbar(error, [5000]);
    } else {
      window.location.reload();
      sessionStorage.setItem('reload', 'Post unpinned!');
    }
  };

  const deleteHandler = async () => {
    document.body.style.cursor = 'progress';
    document.documentElement.style.cursor = 'progress';

    const error = await dispatch(deletePost(post._id));
    if (error) {
      openSnackbar(error, [5000]);
    } else {
      openSnackbar('Successfully deleted post.', [5000]);
    }

    document.body.style.cursor = 'default';
    document.documentElement.style.cursor = 'default';
  };

  const [isOpen, setIsOpen] = useState(false);

  // add close dropdown mouselistener to close on outside click
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // click outside handler
    function clickOutsideHandler(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Element) &&
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Element)
      ) {
        setIsOpen(false);
      }
    }

    // bind event listener to entire document
    document.addEventListener('mouseup', clickOutsideHandler);
    return () => {
      // remove event listener on cleanup
      document.removeEventListener('mouseup', clickOutsideHandler);
    };
  }, [dropdownRef]);

  return (
    <div className={styles.card}>
      {profile && post.user === profile.result.username && (
        <>
          <div className={styles.options} ref={optionsRef}>
            <Options onClick={setIsOpen.bind(null, !isOpen)} />
          </div>
          <AnimatePresence>
            {isOpen && (
              <OptionsDropdown
                isPinned={props.isPinned}
                pinHandler={!props.isPinned ? pinHandler : unpinHandler}
                deleteHandler={deleteHandler}
                ref={dropdownRef}
              />
            )}
          </AnimatePresence>
        </>
      )}
      {props.isPinned && (
        <div className={styles.pin}>
          <Pin /> Pinned post
        </div>
      )}
      <div className={styles.profile}>
        <Link to={`/profile/${post.user}`} className={styles.avatar}>
          {post.picture ? (
            <img src={post.picture} className={styles.picture} />
          ) : (
            <LetteredAvatar name={post.user} size={20} />
          )}
        </Link>
        <Link to={`/profile/${post.user}`}>
          <p style={{ fontWeight: '500' }}>{post.user}</p>
        </Link>
        <p style={{ fontWeight: '100' }}>
          • {moment(post.createdAt).fromNow()}
        </p>
      </div>
      <h3>{post.title}</h3>
      <div className={styles.content}>{ReactHtmlParser(post.content)}</div>
      {post.selectedFile && <img src={post.selectedFile} />}
      {/* {post.tags && (
				<div className={styles.tags}>
					<p>#tags</p> <p>#tags</p> <p>#tags</p>
				</div>
			)} */}
      <Line />
      <div className={styles.like}>
        <Like
          isLoggedIn={profile ? true : false}
          isLikedByUser={
            (profile ? true : false) &&
            (post.likes.includes(profile.result.id) ? true : false)
          }
          onClick={profile ? likeHandler : () => {}}
        />
        <span>
          {post.likes.length} {post.likes.length === 1 ? 'like' : 'likes'}
        </span>
      </div>
    </div>
  );
};

export default Post;
