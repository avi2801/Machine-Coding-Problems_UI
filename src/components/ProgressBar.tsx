import React, { useEffect, useState } from "react";
import styles from "../styles/progressBar.module.css";

type ProgressBarTypes = {
	percentage: number;
};

const ProgressBar = ({ percentage }: ProgressBarTypes) => {
	const { main_container, inner_container } = styles;
	const [activeProgress, setActiveProgress] = useState(0)
	useEffect(() => {
		setTimeout(() => {
			setActiveProgress(percentage)
		},500)
	},[])

	return (
		<>
			<div className={main_container}>
				<div
					className={inner_container}
					style={{ transform: `translateX(${activeProgress - 100}%)` }}
				>
					{activeProgress}%
				</div>
			</div>
		</>
	);
};

export default ProgressBar;
