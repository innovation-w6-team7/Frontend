import { apis } from "api/api";
import { getCookieToken } from "storage/Cookie";

import React from "react";
import Layout from "components/Layout/Layout";

export default function MyPage() {
	console.log(getCookieToken("refresh_token"));

	return (
		<Layout>
			<div>내가 푼 문제</div>
			<div className="w-10/12 h-1/6 bg-slate-400">test</div>
			<div>내가 찜한 문제</div>
		</Layout>
	);
}
