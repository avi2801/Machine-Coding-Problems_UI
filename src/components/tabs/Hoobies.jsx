import React from "react";
import styles from "../../styles/tabs.module.css";

const Hoobies = ({ tabsData, setTabsData }) => {
	const { hoobies } = tabsData;
	const { hoobies_container } = styles;
	const handleHoobiesChange = (e, item) => {
		setTabsData((prev) => ({
			...prev,
			hoobies: prev.hoobies.map((hoobies) =>
				hoobies.name === item ? { ...hoobies, isChecked: true } : hoobies
			),
		}));
	};


	return (
		<div className={hoobies_container}>
			{hoobies.map((hoobie, index) => (
				<label key={index}>
					<input
						type="checkbox"
						value={hoobie.name}
						checked={hoobie.isChecked}
						onChange={(e) => handleHoobiesChange(e, hoobie.name)}
					/>
					{hoobie?.name}
				</label>
			))}
		</div>
	);
};

export default Hoobies;
