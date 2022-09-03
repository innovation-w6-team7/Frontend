import { Routes, Route } from "react-router-dom";
import Interview from "views/Interview";
import Main from "views/Main";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />}></Route>
			<Route path="interview/:id" element={<Interview />}></Route>
		</Routes>
	);
}

export default App;
