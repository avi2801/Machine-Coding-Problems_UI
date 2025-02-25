import React from "react";
import styles from "../../styles/tabs.module.css";

const Profile = ({ tabsData, setTabsData }) => {
	const { profile_container } = styles;
	const handleChange = (e, item) => {
		console.log(e, item);
		setTabsData((prev) => ({
			...prev,
			[item]: e.target.value,
		}));
	};

	return (
		<div className={profile_container}>
			<label>Name: </label>
			<input
				type="text"
				placeholder="Enter your name"
				value={tabsData.name}
				onChange={(e) => handleChange(e, "name")}
			/>
			<label>Email: </label>
			<input
				type="email"
				placeholder="Enter your name"
				value={tabsData.email}
				onChange={(e) => handleChange(e, "email")}
			/>
			<label>Age: </label>
			<input
				type="number"
				placeholder="Enter your name"
				value={tabsData.age}
				onChange={(e) => handleChange(e, "age")}
			/>
		</div>
	);
};

export default Profile;
