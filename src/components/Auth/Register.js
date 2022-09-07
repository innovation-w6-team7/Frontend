import React from "react";
import { useState } from "react";
import { apis } from "api/api";
import Button from "components/Button/Button";

function Register() {
	const [user, setUser] = useState({
		username: "",
		password: "",
		passwordConfirm: "",
		nickname: "",
	});

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { username, password, passwordConfirm, nickname } = user;
		apis.signup(username, password, passwordConfirm, nickname);
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
				type="text"
				name="password"
				onChange={handleChange}
				className="w-8/12 m-3 border-b-2"
			/>
			<div className="font-bold"> 비밀번호 확인 </div>
			<input
				type="text"
				name="passwordConfirm"
				onChange={handleChange}
				className="w-8/12 m-3 border-b-2"
			/>
			<div className="font-bold"> 닉네임 </div>
			<input
				type="text"
				name="nickname"
				onChange={handleChange}
				className="w-8/12 m-3 border-b-2"
			/>
			<div>
				<Button type="submit">회원가입</Button>
			</div>
		</form>
	);
}

export default Register;
