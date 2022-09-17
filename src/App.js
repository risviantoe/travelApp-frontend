import './assets/scss/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example';
import DetailsPage from 'pages/DetailsPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />}></Route>
				<Route path="/properties/:id" element={<DetailsPage />}></Route>
				<Route path="/example" element={<Example />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
