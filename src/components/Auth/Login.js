import React, { useRef } from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { apis } from "api/api";
import { setAccessToekn, setRefreshToken } from "storage/Cookie";
import { SET_TOKEN } from "redux/tokenSlice";

import Button from "components/Button/Button";

function Login({ onClose }) {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const close = (e) => {
		if (onClose) {
			onClose(e);
			alert("login 성공! \n다시 한 번 저장하기를 눌러주세요.");
			window.location.reload();
		}
	};

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { username, password } = user;

		apis.login(username, password).then((response) => {
			setRefreshToken(response.headers["refresh-token"]);
			setAccessToekn(response.headers["authorization"]);
			response.data.success
				? close()
				: alert(
						"아이디 또는 비밀번호를 잘못 입력했습니다. \n확인 후 다시 입력해주세요."
				  );
			setUser("");
		});
	};

	return (
		<form onSubmit={handleSubmit} className="text-center">
			<div className="font-bold"> 아이디 </div>
			<input
				type="text"
				name="username"
				onChange={handleChange}
				className="w-8/12 m-3 border-b-2"
			/>
			<div className="font-bold"> 비밀번호 </div>
			<input
				type="password"
				name="password"
				onChange={handleChange}
				className="w-8/12 m-3 border-b-2"
			/>
			<div>
				<Button type="submit">로그인</Button>
			</div>
		</form>
	);
}

export default Login;
