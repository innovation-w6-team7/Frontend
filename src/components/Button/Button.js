import React from "react";

function Button({ children, onClick }) {
	return (
		<button onClick={onClick} className="w-2/12 h-16 border-2 border-blue-400">
			{children}
		</button>
	);
}

export default Button;
