import React from "react";
import { apis } from "api/api";
import { AiOutlineHeart } from "react-icons/ai";

function Like({ id, ACCESS_TOKEN }) {
	const setLike = () => {
		apis.like(id).then((response) => {
			if (response.data.success == false) {
				alert("로그인이 필요한 기능입니다.");
			} else {
				alert(response.data.data.message);
			}
		});
	};

	return (
		<AiOutlineHeart
			className="absolute w-10 h-10 m-4 cursor-pointer right-4"
			onClick={setLike}
		></AiOutlineHeart>
	);
}

export default Like;
