import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSnackbar } from 'react-simple-snackbar';
import decode, { JwtPayload } from 'jwt-decode';
import { AnimatePresence } from 'framer-motion';

import { authActions } from '../../store/auth-slice';
import { useAppDispatch } from '../../hooks/hooks';

import Home from './icons/Home';
import Notifications from './icons/Notifications';
import SearchBar from './SearchBar';
import HeaderLogin from './HeaderLogin';
import Profile from './Profile';
import ProfileDropdown from './ProfileDropdown';

import logo from '../../images/postr-logo-full.png';
import logoOnly from '../../images/only-logo-full.png';

import styles from './Header.module.css';
import CreatePost from './icons/CreatePost';

export interface UserIDJwtPayload extends JwtPayload {
  username: string;
}

const Header = () => {
  // show snackbar AFTER reload
  window.onload = () => {
    const message = sessionStorage.getItem('reload');
    if (message) {
      openSnackbar(message, [2500]);
      sessionStorage.removeItem('reload');
    }
  };

  // check if user is logged in
  const item = localStorage.getItem('profile');
  const profile = item === null ? null : JSON.parse(item);

  const [user, setUser] = useState(profile);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [pathName, setPathName] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [openSnackbar] = useSnackbar();

  // check logged in on every page change
  const location = useLocation();

  const logoutHandler = useCallback(
    (message: string) => {
      dispatch(authActions.logout());
      setUser('');
      setIsOpen(false);
      navigate('/');
      window.location.reload();
      sessionStorage.setItem('reload', message);
    },
    [dispatch, setUser, setIsOpen, navigate, openSnackbar, location]
  );

  useEffect(() => {
    setPathName(location.pathname.toString());

    const token = user?.token;

    if (token) {
      const decodedToken = decode<UserIDJwtPayload>(token);
      const expiry = decodedToken ? decodedToken.exp : null;
      const imposter = decodedToken.username !== user.result.username;

      if (expiry) {
        if (expiry * 1000 < new Date().getTime()) {
          logoutHandler('Login expired, please log in again!');
        }
      }
      if (imposter) {
        logoutHandler("That's not very nice, identity theft is not a joke.");
      }
    }

    setUser(profile);
  }, [location]);

  // add close dropdown mouselistener to close on outside click
  const dropdownRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // click outside handler
    function clickOutsideHandler(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Element) &&
        profileRef.current &&
        !profileRef.current.contains(event.target as Element)
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
  }, [dropdownRef, profileRef]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

  return (
    <header className={styles.header} style={{display: pathName === '/about' ? 'none' : ''}}>
      <div className={styles.left}>
        <Link to='/'>
          <img
            src={user !== null && windowWidth <= 600 ? logoOnly : logo}
            alt='logo'
            style={{
              width: user !== null && windowWidth <= 600 ? '2rem' : '8rem',
            }}
          />
        </Link>
        <SearchBar />
      </div>
      {user ? (
        <nav className={styles.right}>
          <ul>
            <Link to='/'>
              <li className={styles.icon}>
                <Home filled={location.pathname === '/'} />
              </li>
            </Link>
            <Link to='/create'>
              <li className={styles.icon}>
                <CreatePost filled={location.pathname === '/create'} />
              </li>
            </Link>
            {/* <li className={styles.icon}>
							<div
								className={
									user.result.notifications && styles.badge
								}
							/>
							<Notifications
								filled={location.pathname === '/notifications'}
							/>
						</li> */}
            <li>
              <Profile
                username={user.result.username}
                onClick={setIsOpen.bind(null, !isOpen)}
                windowWidth={windowWidth}
                ref={profileRef}
                isOpen={isOpen}
              />
            </li>
          </ul>
        </nav>
      ) : (
        !(pathName === '/login') && <HeaderLogin />
      )}
      <AnimatePresence>
        {isOpen && (
          <ProfileDropdown
            logoutHandler={logoutHandler.bind(null, 'Successfully logged out!')}
            ref={dropdownRef}
            username={user.result.username}
            onClickProfile={setIsOpen.bind(null, false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
