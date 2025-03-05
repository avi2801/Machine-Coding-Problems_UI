import React, { useEffect, useState } from "react";

import styles from "./Counter.module.css";

const Counter = () => {
	const { main_counter_container, time_container } = styles;
	const [time, setTime] = useState({
		hour: 0,
		minutes: 0,
		seconds: 0,
	});
	const [running, setRunning] = useState(false);

	useEffect(() => {
		if (!running) return;
		let intervalId = setInterval(() => {
			reduceTime();
		}, 100);

		return () => {
			intervalId && clearInterval(intervalId);
		};
	}, [running]);

	const reduceTime = () => {
		setTime((prev) => {
			if (prev.hour === 0 && prev.minutes === 0 && prev.seconds === 0) {
				setRunning(false);
				return prev;
			}
			if (prev.seconds > 0) {
				return { ...prev, seconds: prev.seconds - 1 };
			} else if (prev.minutes > 0) {
				return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
			} else if (prev.hour > 0) {
				return { ...prev, hour: hour.minutes - 1, minutes: 59, seconds: 59 };
			}
			return prev
		});
	};

	const calculateHandler = () => {
		let minutes = time?.seconds >= 60 ? Math.floor(time.seconds / 60) : 0;
		let hour = minutes >= 60 ? Math.floor(minutes / 60) : 0;
		minutes = minutes >= 60 ? minutes % 60 : minutes;
		let seconds = time.seconds % 60;
		setTime((prev) => ({
			...prev,
			hour,
			minutes,
			seconds,
		}));
	};

	return (
		<div className={main_counter_container}>
			<h2>Counter Component</h2>
			<label>
				Enter the value in seconds:{" "}
				<input
					type="number"
					value={time.seconds}
					onChange={(e) =>
						setTime((prev) => ({ ...prev, seconds: e.target.value }))
					}
				/>{" "}
			</label>
			<div className={time_container}>
				<span>{time.hour}</span>
				<p>hour</p>
				<span>{time.minutes}</span>
				<p>mins</p>
				<span>{time.seconds}</span>
				<p>secs</p>
			</div>
			<button onClick={calculateHandler}>Calculate Time</button>
			<div>
				<button
					onClick={() => setRunning(true)}
					style={{ marginRight: "20px" }}
				>
					Start
				</button>
				<button onClick={() => setRunning(false)}>Stop</button>
			</div>
		</div>
	);
};

export default Counter;
