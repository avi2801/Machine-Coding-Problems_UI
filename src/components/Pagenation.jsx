import React, { useState, useEffect } from "react";
import styles from "../styles/pagenation.module.css";

const Pagenation = () => {
	const [pageNumber, setPageNumber] = useState(1);
	const [productData, setProductData] = useState();

	const { main__container, button__class, product__class } = styles;

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		const data = await fetch("https://dummyjson.com/products?limit=100");
		const productDataFromApi = await data.json();

		setProductData(productDataFromApi.products);
	};
	const prevPageClick = () => {
		setPageNumber((prev) => prev - 1);
	};
	const nextPageClick = () => {
		setPageNumber((prev) => prev + 1);
	};

	const pageNumberClickHandled = (index) => {
		setPageNumber(index + 1);
	};

	return (
		<div className={main__container}>
			<div className={product__class}>
				{productData
					?.slice(pageNumber * 10 - 10, pageNumber * 10)
					?.map((product, index) => (
						<img key={product.id} src={product.thumbnail} alt={product.title} />
					))}
			</div>
			<div className={button__class}>
				<button onClick={prevPageClick}>Prev</button>
				{[...Array(10).fill(0)].map((_, index) => {
					return (
						<>
							<button
								style={{
									backgroundColor: pageNumber === index + 1 ? "red" : "white",
								}}
								onClick={() => pageNumberClickHandled(index)}
							>
								{index + 1}
							</button>
						</>
					);
				})}
				<button onClick={nextPageClick}>Next</button>
			</div>
		</div>
	);
};

export default Pagenation;
