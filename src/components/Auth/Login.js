import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { loginUser } from "api/Users";
import { setRefreshToken } from "storage/Cookie";
import { SET_TOKEN } from "redux/tokenSlice";

import Button from "components/Button/Button";

function Login() {
	const dispatch = useDispatch();

	const [user, setUser] = useState({
		nickname: "",
		password: "",
	});

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { nickname, password } = user;
		alert(`nickname: ${nickname}, password: ${password}`);
	};

	const onValid = async ({ userid, password }) => {
		// 백으로부터 받은 응답
		const response = await loginUser({ userid, password });

		if (response.status) {
			// 쿠키에 Refresh Token, store에 Access Token 저장
			setRefreshToken(response.json.refresh_token);
			dispatch(SET_TOKEN(response.json.access_token));
		} else {
			console.log(response.json);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="font-bold"> 아이디 </div>
			<input
				type="text"
				name="nickname"
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
				<Button onClick={onValid} type="submt" className="">
					제출
				</Button>
			</div>
		</form>
	);
}

export default Login;
