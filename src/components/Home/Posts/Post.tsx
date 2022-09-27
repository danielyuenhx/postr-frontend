import React, { useState, useRef, useEffect } from 'react';
import LetteredAvatar from 'react-lettered-avatar';
import ReactHtmlParser from 'react-html-parser';
import { useSnackbar } from 'react-simple-snackbar';
import moment from 'moment';

import Like from '../icons/Like';
import Options from '../icons/Options';
import OptionsDropdown from './OptionsDropdown';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { deletePost, likePost } from '../../../actions/posts-actions';

import styles from './Post.module.css';
import Line from '../../UI/Line';
import { postsActions } from '../../../store/posts-slice';

type Post = {
	_id: string;
	user: string;
	title: string;
	content: string;
	tags: string;
	selectedFile: string;
	likes: [string];
	createdAt: Date;
};

const Post = (props: { post: Post; key: string }) => {
	const item = localStorage.getItem('profile');
	const profile = item === null ? null : JSON.parse(item);

	const post = props.post;

	const dispatch = useAppDispatch();
	const [openSnackbar] = useSnackbar();

	const likeHandler = async () => {
		await dispatch(likePost(post._id));
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
			<div className={styles.profile}>
				<div className={styles.avatar}>
					<LetteredAvatar name={post.user} size={20} />
				</div>
				<p style={{ fontWeight: '500' }}>{post.user}</p>
				<p style={{ fontWeight: '100' }}>
					• {moment(post.createdAt).fromNow()}
				</p>
				<div className={styles.options} ref={optionsRef}>
					<Options onClick={setIsOpen.bind(null, !isOpen)} />
				</div>
				{isOpen && (
					<OptionsDropdown
						deleteHandler={deleteHandler}
						ref={dropdownRef}
					/>
				)}
			</div>
			<h3>{post.title}</h3>
			<div className={styles.content}>
				{ReactHtmlParser(post.content)}
			</div>
			{post.selectedFile && <img src={post.selectedFile} />}
			{post.tags && (
				<div className={styles.tags}>
					<p>#tags</p> <p>#tags</p> <p>#tags</p>
				</div>
			)}
			<Line />
			<div className={styles.like}>
				<Like
					isLoggedIn={profile ? true : false}
					isLikedByUser={
						(profile
							? true
							: false) && (post.likes.includes(profile.result.id)
							? true
							: false)
					}
					onClick={profile ? likeHandler : () => {}}
				/>
				<span>
					{post.likes.length}{' '}
					{post.likes.length === 1 ? 'like' : 'likes'}
				</span>
			</div>
		</div>
	);
};

export default Post;
