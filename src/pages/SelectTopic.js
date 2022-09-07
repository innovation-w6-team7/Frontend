import React, { useEffect, useState } from "react";
import Layout from "components/Layout/Layout";
import { LongButton } from "components/Button/Button";
import { useNavigate } from "react-router-dom";
import { apis } from "api/api";

const SelectTopic = () => {
	const navigate = useNavigate();
	const topic = ["Frontend", "Backend", "CS"];

	const [selectTopic, setSelectTopic] = useState(true);
	const [topicData, setTopicData] = useState();
	const [subTopicData, setSubTopicData] = useState();

	const fetchTopic = (topic) => {
		apis.getTopic(topic).then((response) => setTopicData(response.data.data));
		setSelectTopic(!selectTopic);
	};

	const fetchSubTopic = (subTopic, id) => {
		apis
			.getSubTopic(subTopic)
			.then((response) => setSubTopicData(response.data.data));
		navigate(`/interview/${id}`);
	};

	return (
		<Layout>
			<div className="flex flex-col items-center gap-10">
				{selectTopic ? (
					<>
						<div className="text-3xl font-bold mt-36 mb-36">
							어떤 면접을 <span className="text-[#4593FC]">희망</span>하시나요?
						</div>
						{topic.map((topic, index) => (
							<LongButton
								key={index}
								onClick={() => {
									fetchTopic(topic);
								}}
							>
								{topic}
							</LongButton>
						))}
					</>
				) : (
					<>
						<div className="text-3xl font-bold text-center mt-36 mb-36 ">
							어떤 <span className="text-[#4593FC]">주제</span>를
							선택하실건가요?
						</div>
						{topicData &&
							topicData.map((subTopic) => (
								<LongButton
									key={subTopic.subtopicId}
									onClick={() => {
										fetchSubTopic(subTopic.subtopicName, subTopic.subtopicId);
									}}
								>
									{subTopic.subtopicName}
								</LongButton>
							))}
					</>
				)}
			</div>
		</Layout>
	);
};

export default SelectTopic;
