import React, { useState } from "react";
import Profile from "../components/tabs/Profile";
import Terms from "../components/tabs/Terms";
import Hoobies from "../components/tabs/Hoobies";
import styles from "../styles/tabs.module.css";

const Tabs = () => {
	const { tabs__container, tab_container, component_container } = styles;
	const [activeTab, setActiveTab] = useState(0);
	const [tabsData, setTabsData] = useState({
		name: "Avinash Anand",
		email: "avinashtiwary6300@gmail.com",
		age: 20,
		hoobies: [
			{ name: "Music", isChecked: false },
			{ name: "Cricket", isChecked: false },
			{ name: "Reading Books", isChecked: false },
		],
		terms: false,
	});
	const tabs = [
		{
			name: "Profile",
			component: Profile,
		},
		{
			name: "Hobbies",
			component: Hoobies,
		},
		{
			name: "Terms",
			component: Terms,
		},
	];
	const ActiveTab = tabs[activeTab].component;

	return (
		<div>
			<div className={tabs__container}>
				{tabs.map((tab, index) => {
					return (
						<div
							className={tab_container}
							key={tab.name}
							onClick={() => setActiveTab(index)}
						>
							{tab.name}
						</div>
					);
				})}
			</div>
			<div className={component_container}>
				{<ActiveTab tabsData={tabsData} setTabsData={setTabsData} />}
			</div>
		</div>
	);
};

export default Tabs;
