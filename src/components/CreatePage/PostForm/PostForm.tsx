import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'react-simple-snackbar';
import { TailSpin } from 'react-loader-spinner';
import FileBase from 'react-file-base64';

import Editor from './Editor';
import Line from '../../UI/Line';
import { createPost } from '../../../actions/posts-actions';
import { useAppDispatch } from '../../../hooks/hooks';

import styles from './PostForm.module.css';
import Attach from '../icons/Attach';

const PostForm = () => {
	// check if user is logged in
	const item = localStorage.getItem('profile');
	const profile = item === null ? null : JSON.parse(item);

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [tags, setTags] = useState('');
	const [selectedFile, setSelectedFile] = useState('');
	const [fileName, setFileName] = useState('');

	const [isLoading, setIsLoading] = useState(false);

	const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	const contentHandler = (html: string) => {
		setContent(html);
	};

	const tagsHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTags(event.target.value);
	};

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [openSnackbar] = useSnackbar();

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		document.body.style.cursor = 'progress';
		document.documentElement.style.cursor = 'progress';
		setIsLoading(true);

		// create the post
		const error = await dispatch(
			createPost({
				user: profile.result.username,
				title,
				content,
				tags,
				selectedFile,
			})
		);
		if (error) {
			openSnackbar(error, [5000]);
		} else {
			openSnackbar('Successfully created post!', [5000]);
			navigate('/');
		}

		document.body.style.cursor = 'default';
		document.documentElement.style.cursor = 'default';
		setIsLoading(false);
	};

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
		<div>
			<h2 className={styles.heading}>Create a post</h2>
			<Line />
			<div className={styles.card}>
				<input
					placeholder="Title"
					className={styles.title}
					maxLength={300}
					value={title}
					onChange={titleHandler}
				/>
				<div className={styles.editor}>
					<Editor onChange={contentHandler} />
				</div>
				<div className={styles.bottom}>
					<div>
						<div className={styles.file} id="filebaseDiv">
							<FileBase
								type="image"
								multiple={false}
								onDone={({ base64 }: { base64: string }) =>
									setSelectedFile(base64)
								}
							/>
							<label htmlFor="filebase">
								<Attach />{' '}
								{fileName ? fileName : 'Attach an image'}
							</label>
						</div>
						{selectedFile && (
							<div
								className={styles.picture}
								style={{
									backgroundImage: `url(${selectedFile})`,
								}}
							/>
							// <img src={selectedFile} style={{"width": "100%"}} />
						)}
						{/* <input
							placeholder="Tags..."
							className={styles.tags}
							value={tags}
							onChange={tagsHandler}
						/> */}
					</div>
					<Line />
					<div className={styles.buttons}>
						<Link to="/">
							<button className={styles.cancel}>Cancel</button>
						</Link>
						<form onSubmit={submitHandler}>
							<button
								className={styles.post}
								type="submit"
								onClick={
									!isLoading
										? setIsLoading.bind(null, false)
										: () => {}
								}
							>
								{!isLoading ? (
									'Post'
								) : (
									<TailSpin
										color="white"
										width="1rem"
										height="1rem"
										ariaLabel="loading"
									/>
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostForm;
