import React from 'react'
import { Link } from 'react-router-dom';

import InfoCard from '../../UI/InfoCard';

import logo from '../../../images/only-logo-full.png';

import styles from './LoginForm.module.css'

const LoginForm = () => {
  return (
    <InfoCard>
      <div className={styles.login}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <p style={{ textAlign: 'center' }}>Log in to post something!</p>
        <Link to='/login'>
          <button className={styles.button}>Login</button>
        </Link>
      </div>
    </InfoCard>
  )
}

export default LoginForm