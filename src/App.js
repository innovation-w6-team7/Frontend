import { Routes, Route } from "react-router-dom";
import Interview from "pages/Interview";
import Main from "pages/Main";
import Ending from "pages/Ending";
import MyPage from "pages/MyPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />}></Route>
			<Route path="interview/:id" element={<Interview />}></Route>
			<Route path="ending" element={<Ending />}></Route>
			<Route path="mypage" element={<MyPage />}></Route>
		</Routes>
	);
}

export default App;
