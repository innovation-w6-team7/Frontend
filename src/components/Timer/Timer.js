import { useState, useRef, useEffect } from "react";

const Timer = () => {
	const [sec, setSec] = useState(0);
	const time = useRef(60);
	const timerId = useRef(null);

	useEffect(() => {
		timerId.current = setInterval(() => {
			setSec(time.current % 60);
			time.current -= 1;
		}, 1000);

		return () => clearInterval(timerId.current);
	}, []);

	useEffect(() => {
		if (time.current <= 0) {
			console.log("타임 아웃");
			clearInterval(timerId.current);
		}
	}, [sec]);

	return <div className="timer">{sec} 초</div>;
};

export default Timer;
