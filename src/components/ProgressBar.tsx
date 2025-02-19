import React, { useEffect, useState } from "react";
import styles from "../styles/progressBar.module.css";

type ProgressBarTypes = {
	percentage: number;
};

const ProgressBar = ({ percentage }: ProgressBarTypes) => {
	const { main_container } = styles;

	return (
		<>
			<h2>Progress Bar</h2>
			<div className={main_container}>
				<span>{percentage.toFixed()}%</span>
				<div style={{ width: `${percentage}%` }} />
			</div>
		</>
	);
};

export default ProgressBar;
