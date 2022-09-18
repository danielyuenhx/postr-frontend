import React from 'react'

import Post from './Post'

import styles from './Posts.module.css'

const Posts = () => {
  return (
    <div className={styles.container}>
        <Post />
    </div>
  )
}

export default Posts