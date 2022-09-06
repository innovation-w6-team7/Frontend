import React, { useState, useEffect } from "react";
import { apis } from "api/api";

function AnotherAnswer() {
	const [anotherAnswer, setAnotherAnswer] = useState();

	useEffect(() => {
		apis
			.anotherAnswer(2)
			.then((response) => setAnotherAnswer(response.data.data));
	}, []);
	return (
		<div>
			{anotherAnswer &&
				anotherAnswer.map((answer, index) => (
					<div key={index} className="w-full p-2 m-4 border-2 rounded-3xl">
						<div>{answer.nickname}</div>
						<div>{answer.content}</div>
					</div>
				))}
		</div>
	);
}

export default AnotherAnswer;
