import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setRefreshToken = (refreshToken) => {
	const today = new Date();
	const expireDate = today.setDate(today.getDate() + 7);

	return cookies.set("refresh_token", refreshToken, {
		sameSite: "strict",
		path: "/",
		expires: new Date(expireDate),
	});
};

export const getCookieToken = (name) => {
	return cookies.get(name);
};

export const removeCookieToken = () => {
	return cookies.remove("refresh_token", { sameSite: "strict", path: "/" });
};
