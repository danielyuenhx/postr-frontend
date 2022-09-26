import React, { useState, useRef, useEffect } from 'react';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';

import styles from './Editor.module.css';
import Undo from '../icons/Undo';
import Redo from '../icons/Redo';

const placeholders = [
	'Your content goes here!',
	'Write something...',
	"What's on your mind?",
	'Type your content here...',
];

const charLimit = 2500;

const Editor = (props: { onChange: (html: string) => void }) => {
	const placeholder =
		placeholders[Math.floor(Math.random() * placeholders.length)];

	const editor = useEditor({
		extensions: [
			StarterKit,
			Placeholder.configure({
				placeholder: placeholder,
			}),
			CharacterCount.configure({
				limit: charLimit,
			}),
		],
		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			props.onChange(html);
		},
	});

	const editorRef = useRef<HTMLDivElement>(null);

	if (!editor) {
		return null;
	}

	return (
		<div className={styles.container}>
			<div className={styles.menu}>
				<button
					onClick={() => editor.chain().focus().toggleBold().run()}
					className={editor.isActive('bold') ? styles.active : ''}
				>
					<b>bold</b>
				</button>
				<button
					onClick={() => editor.chain().focus().toggleItalic().run()}
					className={editor.isActive('italic') ? styles.active : ''}
				>
					<i>italic</i>
				</button>
				<button
					onClick={() => editor.chain().focus().toggleStrike().run()}
					className={editor.isActive('strike') ? styles.active : ''}
				>
					<s>strike</s>
				</button>
				<button
					onClick={() => editor.chain().focus().toggleCode().run()}
					className={editor.isActive('code') ? styles.active : ''}
				>
					<code>code</code>
				</button>
				<button
					onClick={() => editor.chain().focus().setParagraph().run()}
					className={
						editor.isActive('paragraph') ? styles.active : ''
					}
				>
					paragraph
				</button>
				{/* <button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 1 }).run()
					}
					className={
						editor.isActive('heading', { level: 1 })
							? styles.active
							: ''
					}
				>
					h1
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 2 }).run()
					}
					className={
						editor.isActive('heading', { level: 2 })
							? styles.active
							: ''
					}
				>
					h2
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 3 }).run()
					}
					className={
						editor.isActive('heading', { level: 3 })
							? styles.active
							: ''
					}
				>
					h3
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 4 }).run()
					}
					className={
						editor.isActive('heading', { level: 4 })
							? styles.active
							: ''
					}
				>
					h4
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 5 }).run()
					}
					className={
						editor.isActive('heading', { level: 5 })
							? styles.active
							: ''
					}
				>
					h5
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleHeading({ level: 6 }).run()
					}
					className={
						editor.isActive('heading', { level: 6 })
							? styles.active
							: ''
					}
				>
					h6
				</button> */}
				<button
					onClick={() =>
						editor.chain().focus().toggleBulletList().run()
					}
					className={
						editor.isActive('bulletList') ? styles.active : ''
					}
				>
					bullet list
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleOrderedList().run()
					}
					className={
						editor.isActive('orderedList') ? styles.active : ''
					}
				>
					ordered list
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleCodeBlock().run()
					}
					className={
						editor.isActive('codeBlock') ? styles.active : ''
					}
				>
					code block
				</button>
				<button
					onClick={() =>
						editor.chain().focus().toggleBlockquote().run()
					}
					className={
						editor.isActive('blockquote') ? styles.active : ''
					}
				>
					blockquote
				</button>
				{/* <button
				onClick={() => editor.chain().focus().setHorizontalRule().run()}
			>
				horizontal rule
			</button> */}
				<button
					onClick={() => editor.chain().focus().setHardBreak().run()}
				>
					line break
				</button>
				<button onClick={() => editor.chain().focus().undo().run()}>
					<Undo />
				</button>
				<button onClick={() => editor.chain().focus().redo().run()}>
					<Redo />
				</button>
			</div>
			<EditorContent editor={editor} className={styles.editor} />
			<div className={styles.charcount}>
				{editor.storage.characterCount.words()} words
				<br />
				{editor.storage.characterCount.characters()}/{charLimit}{' '}
				characters
			</div>
		</div>
	);
};

export default Editor;
