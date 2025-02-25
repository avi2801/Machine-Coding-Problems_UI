import React from "react";

const Terms = ({ tabsData, setTabsData }) => {
	const { terms } = tabsData;
	const handleTermsOnChange = () => {
		setTabsData((prev) => ({
			...prev,
			terms: true,
		}));
	};
	return (
		<div>
			<h3>Do you agree with the terms and conditions</h3>
			<label>{"Tick the box accordingly"}</label>
			<input
				type="checkbox"
				value={terms}
				onChange={() => handleTermsOnChange()}
				checked={tabsData.terms}
			/>
		</div>
	);
};

export default Terms;
