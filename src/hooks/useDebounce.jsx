import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
	const [debounceValue, setDebounceValue] = useState();

	useEffect(() => {
		const timeId = setTimeout(() => {
			setDebounceValue(value);
		}, delay);
		return () => {
			timeId && clearTimeout(timeId);
		};
	}, [value, delay]);

	return debounceValue;
};


export default useDebounce;
