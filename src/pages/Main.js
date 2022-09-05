import Layout from "components/Layout/Layout";
import { getInterview } from "api/InterviewList";
import { getInterviewList } from "api/services/InterviewList";

import { useState } from "react";
import React from "react";

function Main() {
	const [list, setTest] = useState([]);

	async function test() {
		var a = await getInterview()
			.then(getInterviewList)
			.then((res) => setTest(res));
	}

	console.log(list);
	return (
		<Layout>
			<button onClick={test}>test</button>
		</Layout>
	);
}

export default Main;
