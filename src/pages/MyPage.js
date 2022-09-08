import { apis } from "api/api";
import { getCookieToken } from "storage/Cookie";

import React, { useState, useEffect } from "react";
import Layout from "components/Layout/Layout";

export default function MyPage() {
	const [myInterviewList, setMyInterviewList] = useState();
	const [myLikeList, setMyLikeList] = useState();

	useEffect(() => {
		apis.myList().then((response) => {
			setMyLikeList(response.data.data.like);
			setMyInterviewList(response.data.data.interview);
		});
	}, []);

	return (
		<Layout>
			<div className="flex items-center h-full">
				<div className="flex flex-col w-full gap-2 teims-center">
					<div className=" text-[#4593FC] text-xl font-bold">내가 푼 문제</div>
					{myInterviewList &&
						myInterviewList.map((interview) => (
							<>
								<div
									key={interview.id}
									className="flex flex-col h-auto p-2 border-2 rounded-2xl"
								>
									<div className="font-bold">{interview.subtopic}</div>
									<div className="font-bold text-[#4593FC]">
										{interview.question}
									</div>
									<div>나의 답변 : {interview.myanswer}</div>
								</div>
							</>
						))}
					{myInterviewList && myInterviewList.length == 0 ? (
						<div className="flex items-center justify-center h-40 text-2xl border-2 rounded-full">
							<div className="">아직 푼 문제가 없습니다. :(</div>
						</div>
					) : null}
					<div className="mt-4 text-[#4593FC] text-xl font-bold h-auto">
						내가 찜한 문제
					</div>
					{myLikeList &&
						myLikeList.map((like) => (
							<>
								<div
									key={like.id}
									className="flex flex-col p-2 border-2 rounded-2xl"
								>
									<div className="font-bold">{like.subtopic}</div>
									<div className="font-bold text-[#4593FC]">
										{like.question}
									</div>
									<div>예시 답안 : {like.answer}</div>
								</div>
							</>
						))}
					{myLikeList && myLikeList.length == 0 ? (
						<div className="flex items-center justify-center h-40 text-2xl border-2 rounded-full">
							<div className="">아직 찜한 문제가 없습니다. :(</div>
						</div>
					) : null}
				</div>
			</div>
		</Layout>
	);
}
