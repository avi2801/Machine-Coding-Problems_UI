import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import useDebounce from "../../hooks/useDebounce";
const SearchBar = () => {
	const { search_bar_container } = styles;
	const [searchValue, setSearchValue] = useState("");
	const [productList, setProductList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const debounceValue = useDebounce(searchValue, 1000);

	const fetchProducts = async (searchParam) => {
		setIsLoading(true);
		const response = await fetch(
			`https://dummyjson.com/products/search?q=${searchParam}`
		);
		const data = await response.json();

		if (data && data.products.length) {
			setProductList(data.products);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (debounceValue) {
			fetchProducts(debounceValue);
		}
	}, [debounceValue]);

	console.log(productList);

	return (
		<div className={search_bar_container}>
			<h2>Search Bar</h2>
			<input
				type="text"
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				placeholder="Search products..."
			/>
			{isLoading ? (
				<div>Loading ....</div>
			) : (
				<ul>
					{productList.map((product) => (
						<li key={product.id}>{product.title}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchBar;
