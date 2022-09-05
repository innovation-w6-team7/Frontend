import axios from "axios";
import Interview from "pages/Interview";

const api = axios.create({
	baseURL: "http://13.125.250.180",
	headers: {
		"content-type": "application/json;charset=UTF-8",
		accept: "application/json,",
	},
});

api.interceptors.request.use(function (config) {
	const accessToken = document.cookie.split("=")[1];
	config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
	return config;
});

export const apis = {
	// member
	signup: (username, password, passwordConfirm, nickname) =>
		api.post("/member/signup", {
			username: username,
			password: password,
			passwordConfirm: passwordConfirm,
			nickname: nickname,
		}),
	login: (username, password) =>
		api.post("/member/login", {
			username: username,
			password: password,
		}),
	getAccessToken: () =>
		api.post("/auth/member/reissue", {
			Authorization: `${accessToken}`,
		}),

	// interview
	myAnswer: (interviewid) =>
		api.post(`/auth/interview/${interviewid}`, {
			Authorization: `${accessToken}`,
		}),
	anotherAnswer: (interviewid) => api.get(`/interview/${interviewid}/answer`),

	// like
	like: (interviewid) =>
		api.post(`/auth/interview/${interviewid}/like`, {
			Authorization: `${accessToken}`,
		}),

	// mypage
	myList: () =>
		api.get("/auth/interview/mypage", {
			Authorization: `${accessToken}`,
		}),
	private: (interviewid) => {
		api.put(`/auth/interview/mypage/${Interviewid}`, {
			Authorization: `${accessToken}`,
		});
	},
};
