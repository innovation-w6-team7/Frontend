import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { apis } from "api/api";
import { setRefreshToken } from "storage/Cookie";
import { SET_TOKEN } from "redux/tokenSlice";

import Button from "components/Button/Button";

function Login() {
	const dispatch = useDispatch();

	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const { username, password } = user;

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { username, password } = user;
		const test = apis
			.login(username, password)
			.then((response) => console.log(response.headers))
			.then((a) => console.log(a));
		if (test.headrs) {
			console.log(test.headrs.authorization);
		} else {
			console.log(test);
		}
	};

	// const onValid = async (username, password) => {
	// 	const response = await apis.login(username, password);
	// 	if (response.status) {
	// 		// 쿠키에 Refresh Token, store에 Access Token 저장
	// 		console.log(response.status);
	// 	} else {
	// 		console.log(response.json);
	// 	}
	// };

	return (
		<form onSubmit={handleSubmit}>
			<div className="font-bold"> 아이디 </div>
			<input
				type="text"
				name="username"
				onChange={handleChange}
				className="border-b-2"
			/>
			<div className="font-bold"> 비밀번호 </div>
			<input
				type="text"
				name="password"
				onChange={handleChange}
				className="border-b-2"
			/>
			<div>
				<Button type="submit">로그인</Button>
			</div>
		</form>
	);
}

export default Login;
