import React from "react";
import useFetch from "../../hooks/useFetch";

const DropDown = ({ apiUrl, label, valueKey, onSelect }) => {
	// custom hook to fetch data
	const { data, error, loading } = useFetch(apiUrl);

	//loading state
	if (loading) return <p>Loading.....</p>;

	// if error is encountered
	if (error) return <p>Error:{error.message}</p>;

	return (
		<div>
			<label htmlFor="dropdown">{label}</label>
			<select
				id="dropDown"
				onChange={(e) => onSelect(e.target.value)}
				aria-label={label}
			>
				<option value="">Select an option</option>
				{data.map((item) => (
					<option
						style={{ color: "black" }}
						key={item[valueKey]}
						value={item[valueKey]}
					>
						{item.name.common}
					</option>
				))}
			</select>
		</div>
	);
};

export default DropDown;
