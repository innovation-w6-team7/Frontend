import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { AnotherAnswerModal } from "components/Modal/Modal";
import Layout from "components/Layout/Layout";
import Button from "components/Button/Button";
import Timer from "components/Timer/Timer";
import Modal from "components/Modal/Modal";
import Login from "components/Auth/Login";
import Register from "components/Auth/Register";
import AnotherAnswer from "components/Answer/AnotherAnswer";

function Interview() {
	const navigate = useNavigate();

	const [modalVisible, setModalVisible] = useState(false);
	const [checkAnswer, setCheckAnswer] = useState(true);

	const [checkAnotherAnswer, setCheckAnotherAnswer] = useState(true);
	const [AnotherModalVisible, setAnotherModalVisible] = useState(false);

	const [register, setRegister] = useState(false);

	const openModal = () => {
		setModalVisible(!modalVisible);
	};
	const openCheckAnotherAnswer = () => {
		setAnotherModalVisible(!AnotherModalVisible);
	};

	return (
		<>
			<Layout>
				<div className="flex items-center h-full">
					<div className="flex flex-col items-center gap-3 w-full h-5/6 rounded-2xl border-4 border-[#3D6AFE]">
						{checkAnswer ? (
							<>
								<Timer />
								<div className="mt-10 text-3xl font-bold">
									Q1. 스프링이 무엇인가요?
								</div>
								<div className="mt-5 text-xl font-bold">
									본인이 생각하는 답 적어보기{" "}
								</div>
								<input className="w-8/12 p-4 m-4 border-2 shadow-xl h-2/4 rounded-3xl" />
								<div className="fixed flex justify-center w-full gap-40 bottom-28">
									<Button onClick={openModal}>저장하기</Button>
									<Button
										onClick={() => {
											setCheckAnswer(!checkAnswer);
										}}
									>
										답안확인
									</Button>
								</div>
							</>
						) : (
							<>
								<div className="mt-10 text-3xl font-bold">
									Q1. 스프링이 무엇인가요?
								</div>
								<div> 예시 답안 </div>
								<div className="fixed flex justify-center w-full gap-40 bottom-28">
									<Button
										onClick={() => {
											navigate("/ending");
										}}
									>
										그만 풀기
									</Button>
									<Button onClick={openCheckAnotherAnswer}>
										다른 사람이 푼 답안 보기
									</Button>
									<Button
										onClick={() => {
											setCheckAnswer(!checkAnswer);
										}}
									>
										다음 문제
									</Button>
								</div>
							</>
						)}
					</div>
				</div>
			</Layout>
			{modalVisible && (
				<Modal
					visible={modalVisible}
					closable={true}
					maskClosable={true}
					onClose={openModal}
				>
					<Login />
					<Button
						onClick={() => {
							setRegister(!register);
						}}
					>
						회원가입
					</Button>
				</Modal>
			)}
			{register && (
				<Modal
					visible={modalVisible}
					closable={true}
					maskClosable={true}
					onClose={openModal}
				>
					<Register />
				</Modal>
			)}
			{checkAnotherAnswer && (
				<AnotherAnswerModal
					visible={AnotherModalVisible}
					closable={true}
					maskClosable={true}
					onClose={openCheckAnotherAnswer}
				>
					<AnotherAnswer></AnotherAnswer>
				</AnotherAnswerModal>
			)}
		</>
	);
}

export default Interview;
