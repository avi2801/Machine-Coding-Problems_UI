import React, { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ percentageFromProps }) => {
	const [percentage, setPercentage] = useState(0);

	const { outer_container, inner_container } = styles;

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setPercentage(percentageFromProps);
		}, 2000);
		return () => {
			clearTimeout(timeoutId);
		};
	}, []);
	return (
		<div className={outer_container}>
			<div
				className={inner_container}
				style={{
					width: `${percentage}%`,
					color: `${percentage <= 40 ? "blue" : "white"}`,
				}}
			>
				{`${percentage}%` || ""}
			</div>
		</div>
	);
};

export default ProgressBar;
