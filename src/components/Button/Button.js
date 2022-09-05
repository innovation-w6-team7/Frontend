import React from "react";

export default function Button({ children, onClick, className }) {
	return (
		<button
			onClick={onClick}
			className="w-2/12 h-16 border-2 border-[#3D6AFE] hover:bg-[#3D6AFE] hover:text-white rounded-3xl shadow-lg"
		>
			{children}
		</button>
	);
}

export function LongButton({ children, onClick }) {
	return (
		<button
			onClick={onClick}
			className="w-6/12 h-16 border-2 border-[#3D6AFE] rounded-3xl shadow-lg hover:bg-[#3D6AFE] hover:text-white"
		>
			{children}
		</button>
	);
}
