import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'react-simple-snackbar';
import { TailSpin } from 'react-loader-spinner';

import Editor from './Editor';
import { createPost } from '../../../actions/post-actions';
import { useAppDispatch } from '../../../hooks/hooks';

import styles from './PostForm.module.css';

const PostForm = () => {
	const [isLoading, setIsLoading] = useState(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [openSnackbar] = useSnackbar();

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		document.body.style.cursor = 'progress';
		document.documentElement.style.cursor = 'progress';
		setIsLoading(true);

		// create the post
		// const error = await dispatch(
		// 	createPost({ })
		// );
		// if (error) {
		// 	openSnackbar(error, [5000]);
		// } else {
		// 	openSnackbar('Successfully created post!', [5000]);
		// 	navigate('/');
		// }

		document.body.style.cursor = 'default';
		document.documentElement.style.cursor = 'default';
		setIsLoading(false);
	};

	return (
		<div>
			<h2 className={styles.heading}>Create a post</h2>
			<div className={styles.line}></div>
			<form className={styles.card} onSubmit={submitHandler}>
				<input
					placeholder="Title"
					className={styles.title}
					maxLength={300}
				/>
				<div className={styles.editor}>
					<Editor />
				</div>
				<div className={styles.bottom}>
					<input placeholder="Tags..." className={styles.tags} />
					<div>
						<Link to="/">
							<button className={styles.cancel}>Cancel</button>
						</Link>
						<button
							className={styles.post}
							type="submit"
							onClick={setIsLoading.bind(null, false)}
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
					</div>
				</div>
			</form>
		</div>
	);
};

export default PostForm;
