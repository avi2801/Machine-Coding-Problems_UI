import React, { useEffect, useState } from "react";
import styles from "./TrafficLights.module.css";

const TrafficLights = () => {
	const { main_container, traffic_component } = styles;
	const [color, setColor] = useState("Red");
	const [greenCycle, setGreenCycle] = useState(false);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		if (!isRunning) return;

		let timeId;
		const transitions = {
			Green: { next: "Yellow", delay: 3000 },
			Yellow: { next: greenCycle ? "Green" : "Red", delay: 1000 },
			Red: { next: "Yellow", delay: 3000 },
		};

		timeId = setTimeout(() => {
			setColor(transitions[color].next);
			color === "Red" ? setGreenCycle(true) : setGreenCycle(false);
		}, transitions[color].delay);

		return () => clearTimeout(timeId);
	}, [isRunning, color]);

	return (
		<div className={main_container}>
			<h2>Traffic Lights Component</h2>
			<div className={traffic_component}>{color}</div>
			<div>
				<button onClick={() => setIsRunning(true)}>Start</button>
				<button onClick={() => setIsRunning(false)}>Stop</button>
			</div>
		</div>
	);
};

export default TrafficLights;
