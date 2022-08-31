import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import PostsForm from './components/PostsForm/PostsForm';
import Login from './components/Login/Login';

function App() {
	return (
		<BrowserRouter>
			<Header />
            <Routes>
                <Route path="/" element={<PostsForm />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
			{/* <main>
				<PostsForm />
			</main> */}
            {/* <Login /> */}
		</BrowserRouter>
	);
}

export default App;
