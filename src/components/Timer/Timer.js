import { useState, useRef, useEffect } from "react";

const Timer = () => {
	const [sec, setSec] = useState(60);
	const time = useRef(60);
	const timerId = useRef(null);

	useEffect(() => {
		timerId.current = setInterval(() => {
			setSec(time.current - 1);
			time.current -= 1;
		}, 1000);

		return () => clearInterval(timerId.current);
	}, []);

	useEffect(() => {
		if (time.current <= 0) {
			clearInterval(timerId.current);
		}
	}, [sec]);

	return (
		<div className="p-2 mt-5 text-white border-2 rounded-3xl timer bg-slate-400">
			{sec}초 안에 정답을 적어보세요
		</div>
	);
};

export default Timer;
