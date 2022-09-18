import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SnackbarProvider from 'react-simple-snackbar';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
	return (
		<SnackbarProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</BrowserRouter>
		</SnackbarProvider>
	);
}

export default App;
