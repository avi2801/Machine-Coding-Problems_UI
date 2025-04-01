import React from "react";
import styles from "./Tabs.module.css";

const TabsComponent = ({ tabsList }) => {
	const { tabs_main_container } = styles;

	const navigateClick = (link) => {
		window.location.href = link;
	};
	return (
		<div className={tabs_main_container}>
			{tabsList.map((tab, index) => (
				<span key={index} onClick={() => navigateClick(tab.link)}>{tab.name}</span>
			))}
		</div>
	);
};

export default TabsComponent;
