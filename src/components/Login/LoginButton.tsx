import React from 'react'

import styles from './LoginButton.module.css'

type Props = { label: string }

const LoginButton = (props: Props) => {
    return (
        <button type="submit" className={`${styles.button} ${styles.disabled}`}>{props.label}</button>
    )
}

export default LoginButton;