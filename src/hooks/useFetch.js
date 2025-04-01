import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Network response was not ok!')
			}
			const data = await response.json();
			setData(data);
		}
		catch (error) {
			setError(error)
		}
		finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return { loading, data, error }
}

export default useFetch;
