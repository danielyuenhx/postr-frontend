import { useAppDispatch } from './hooks/hooks';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SnackbarProvider from 'react-simple-snackbar';

import './App.css';
import { getPosts } from './actions/posts-actions';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import CreatePage from './components/CreatePage/CreatePage';
import ProfilePage from './components/ProfilePage/ProfilePage';

function App() {
	const dispatch = useAppDispatch();

	// check if user is logged in
	const item = localStorage.getItem('profile');
	const profile = item === null ? null : JSON.parse(item);

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<SnackbarProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					{/* accessible if logged in or not */}
					<Route path="/" element={<Home />} />
					<Route
						path="/profile/:username"
						element={<ProfilePage />}
					/>
					{/* only accessible if not logged in */}
					{!profile?.result?.username && <Route path="/login" element={<Login />} />}
					{/* only accessible if logged in */}
					{profile?.result?.username && (
						<Route path="/create" element={<CreatePage />} />
					)}
          {/* wildcard route */}
					<Route path="*" element={<Navigate replace to="/" />} />
				</Routes>
			</BrowserRouter>
		</SnackbarProvider>
	);
}

export default App;
