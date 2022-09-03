import { Routes, Route } from "react-router-dom";
import Interview from "pages/Interview";
import Main from "pages/Main";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />}></Route>
			<Route path="interview/:id" element={<Interview />}></Route>
		</Routes>
	);
}

export default App;
