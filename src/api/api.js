import axios from "axios";

const api = axios.create({
	baseURL: "http://13.125.250.180",
	headers: {
		"content-type": "application/json;charset=UTF-8",
		accept: "application/json,",
	},
	withCredentials: true,
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
	getAccessToken: (accessToken) =>
		api.post("/auth/member/reissue", {
			Authorization: `${accessToken}`,
		}),

	// interview
	getTopic: (topic) => api.get(`/interview?topic=${topic}`),
	getSubTopic: (topic) => api.get(`/interview/start?subtopic=${topic}`),
	myAnswer: (interviewid, accessToken, content, publicTF) =>
		api.post(`/auth/interview/${interviewid}/myanswer`, {
			headers: {
				Authorization: `${accessToken}`,
			},
			content: content,
			publicTF: publicTF,
		}),
	anotherAnswer: (interviewid) => api.get(`/interview/${interviewid}/answers`),

	// like
	like: (interviewid, accessToken) =>
		api.post(`/auth/interview/${interviewid}/like`, {
			Authorization: `${accessToken}`,
		}),

	// mypage
	myList: (accessToken) =>
		api.get("/auth/interview/mypage", {
			Authorization: `${accessToken}`,
		}),
	private: (interviewid, accessToken) => {
		api.put(`/auth/interview/mypage/${interviewid}`, {
			Authorization: `${accessToken}`,
		});
	},
};
