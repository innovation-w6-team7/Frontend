import Layout from "components/Layout/Layout";
import { LongButton } from "components/Button/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import React from "react";

function Main() {
	const navigate = useNavigate();
	return (
		<Layout>
			<div className="flex flex-col items-center gap-10">
				<>
					<div className="text-3xl font-bold mt-36">벨터뷰</div>
					<div className="cmt-10 mb-40 font-bold text-2xl text-[#4593FC]">
						당신을 위한 기술면접 테스트
					</div>
					<LongButton
						onClick={() => {
							navigate("/selecttopic");
						}}
					>
						면접 진행하기
					</LongButton>
				</>
			</div>
		</Layout>
	);
}

export default Main;
