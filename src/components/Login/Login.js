import React from "react";
import Button from "components/Button/Button";
import { useState } from "react";

function Login() {
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
				<Button type="submt" className="">
					제출
				</Button>
			</div>
		</form>
	);
}

export default Login;
