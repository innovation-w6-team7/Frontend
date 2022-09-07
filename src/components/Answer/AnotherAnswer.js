import React from "react";

function AnotherAnswer({ anotherAnswer }) {
	return (
		<div className="flex flex-col gap-3">
			{anotherAnswer &&
				anotherAnswer.map((answer, index) => (
					<div
						key={index}
						className="flex flex-col w-full p-2 border-2 border-[#4593FC] rounded-3xl"
					>
						<div className="font-bold text-lg text-[#4593FC]">
							닉네임 : {answer.nickname}
						</div>
						<div>{answer.content}</div>
					</div>
				))}

			{anotherAnswer && anotherAnswer.length == 0 ? (
				<div className="text-center">
					아직 다른 사람이 푼 답안이 없습니다 :(
				</div>
			) : null}
		</div>
	);
}

export default AnotherAnswer;
