import React, { useRef } from "react";

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
			// .then((response) => setRefreshToken(response.headers["refresh-token"]))
			.then((response) => {
				setRefreshToken(response.headers["refresh-token"]);
				response.data.success
					? console.log("good")
					: alert(
							"아이디 또는 비밀번호를 잘못 입력했습니다. \n확인 후 다시 입력해주세요."
					  );
			});
	};

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
