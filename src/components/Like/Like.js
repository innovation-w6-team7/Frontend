import React from "react";
import { apis } from "api/api";
import { AiOutlineHeart } from "react-icons/ai";

function Like({ id, ACCESS_TOKEN }) {
	console.log(id, ACCESS_TOKEN);
	const setLike = () => {
		apis.like(id).then((response) => console.log(response));
	};
	const onLike = "absolute w-10 h-10 m-4 right-4 text-pink-400";

	return (
		<AiOutlineHeart
			className="absolute w-10 h-10 m-4 right-4"
			onClick={setLike}
		></AiOutlineHeart>
	);
}

export default Like;
