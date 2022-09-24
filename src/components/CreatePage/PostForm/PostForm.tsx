import React, { MutableRefObject, Ref, useRef, useState } from 'react';
import 'medium-editor/dist/css/themes/default.css';
import 'medium-editor/dist/css/medium-editor.css';
// import { EditorState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import Editor from 'react-medium-editor';

import Editor from './Editor';

import styles from './PostForm.module.css';

const PostForm = () => {

    const submitHandler = (event: React.FormEvent) => {
        event?.preventDefault()
    }

	return (
		<div>
			<h2 className={styles.heading}>Create a post</h2>
			<div className={styles.line}></div>
			<form className={styles.card} onSubmit={submitHandler}>
				<input placeholder="Title" className={styles.title}></input>
				<div className={styles.editor}>
                    <Editor />
				</div>
			</form>
		</div>
	);
};

export default PostForm;
