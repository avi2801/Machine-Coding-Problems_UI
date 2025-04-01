import React, { useState } from "react";
import DropDown from './DropDown'

const DropDownMainComponent = () => {
	const [selectedCountry, setSelectedCountry] = useState("");

	const handleSelect = (countryCode) => {
		setSelectedCountry(countryCode);
		// Additional logic upon selection
	};
	return (
		<div>
			<h1>Country Selector</h1>
			<DropDown
				apiUrl="https://restcountries.com/v3.1/all"
				label="Choose a country:"
				valueKey="cca3" // Country code
				onSelect={handleSelect}
			/>
			{selectedCountry && <p>Selected Country Code: {selectedCountry}</p>}
		</div>
	);
};

export default DropDownMainComponent;
