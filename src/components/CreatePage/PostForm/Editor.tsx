import React, { useState } from 'react';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import styles from './Editor.module.css';
import './Editor.css';

const Editor = () => {
	const [text, setText] = useState('');

	const editorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};
	const editor = useEditor({
		extensions: [StarterKit],
		content: '<p>Hello World!</p>',
	});
	if (!editor) {
		return null;
	}
	return (
		<div className={styles.menu}>
			<button
				onClick={() => editor.chain().focus().toggleBold().run()}
				className={editor.isActive('bold') ? styles.active : ''}
			>
				bold
			</button>
			<button
				onClick={() => editor.chain().focus().toggleItalic().run()}
				className={editor.isActive('italic') ? styles.active : ''}
			>
				italic
			</button>
			<button
				onClick={() => editor.chain().focus().toggleStrike().run()}
				className={editor.isActive('strike') ? styles.active : ''}
			>
				strike
			</button>
			<button
				onClick={() => editor.chain().focus().toggleCode().run()}
				className={editor.isActive('code') ? styles.active : ''}
			>
				code
			</button>
			<button
				onClick={() => editor.chain().focus().setParagraph().run()}
				className={editor.isActive('paragraph') ? styles.active : ''}
			>
				paragraph
			</button>
			<button
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
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				className={editor.isActive('bulletList') ? styles.active : ''}
			>
				bullet list
			</button>
			<button
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				className={editor.isActive('orderedList') ? styles.active : ''}
			>
				ordered list
			</button>
			<button
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				className={editor.isActive('codeBlock') ? styles.active : ''}
			>
				code block
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
				className={editor.isActive('blockquote') ? styles.active : ''}
			>
				blockquote
			</button>
			<button
				onClick={() => editor.chain().focus().setHorizontalRule().run()}
			>
				horizontal rule
			</button>
			<button onClick={() => editor.chain().focus().setHardBreak().run()}>
				hard break
			</button>
			<button onClick={() => editor.chain().focus().undo().run()}>
				undo
			</button>
			<button onClick={() => editor.chain().focus().redo().run()}>
				redo
			</button>
			<EditorContent editor={editor} className={styles.editor} />
		</div>
	);
};

export default Editor;
