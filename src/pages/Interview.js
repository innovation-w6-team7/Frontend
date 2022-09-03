import Layout from "components/Layout/Layout";
import Button from "components/Button/Button";
import Timer from "components/Timer/Timer";
import Form from "components/Form/Form";
import Modal from "components/Modal/Modal";
import { useState } from "react";
import React from "react";

function Interview() {
	const [modalVisible, setModalVisible] = useState(false);
	const [checkAnswer, setCheckAnswer] = useState(false);

	const openModal = () => {
		setModalVisible(true);
	};
	const closeModal = () => {
		setModalVisible(false);
	};

	return (
		<>
			<Layout>
				<div className="flex items-center h-full">
					<div className="flex flex-col items-center gap-3 w-full h-5/6 rounded-2xl border-4 border-[#3D6AFE]">
						<Timer />
						<div className="mt-10 text-3xl font-bold">
							Q1. 스프링이 무엇인가요?
						</div>
						<div className="mt-5 text-xl font-bold">
							{" "}
							본인이 생각하는 답 적어보기{" "}
						</div>
						<Form />
						<div className="flex justify-center w-full gap-40">
							<Button onClick={openModal}>저장하기</Button>
							<Button>답안확인</Button>
						</div>
					</div>
				</div>
			</Layout>
			{modalVisible && (
				<Modal
					visible={modalVisible}
					closable={true}
					maskClosable={true}
					onClose={closeModal}
				>
					<form>
						<input className="border-2" />
						<input className="border-2" />
						<input className="border-2" />
						<input className="border-2" />
						<input className="border-2" />
						<input className="border-2" />
					</form>
					<Button>로그인</Button>
				</Modal>
			)}
		</>
	);
}

export default Interview;
