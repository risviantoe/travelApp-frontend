import './assets/scss/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
