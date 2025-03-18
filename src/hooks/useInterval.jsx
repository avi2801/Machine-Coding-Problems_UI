import { useState, useEffect } from "react";

const useIntervalHook = (callBack, delay) => {
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		if (!isRunning) return;
		const timeId = setInterval(() => {
			callBack();
		}, delay);
		return () => {
			timeId && clearInterval(timeId);
		};
	}, [isRunning]);

	const start = () => {
		setIsRunning(true);
	};
	const stop = () => {
		setIsRunning(false);
	};

	return { start, stop };
};

export default useIntervalHook;
