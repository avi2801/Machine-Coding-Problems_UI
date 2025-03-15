import React, { useState, useEffect } from "react";
import styles from "./Pagenation.module.css";

const Pagenation = ({ productList, productPerPage }) => {
	const [currentPage, setCurretnPage] = useState(1);
	const { main_pagenation_container, item_container, button_container } =
		styles;

	console.log(
		productList.slice(
			currentPage * productPerPage - productPerPage,
			productPerPage * currentPage
		)
	);

	const handlePageClick = (pageValue) => {
		setCurretnPage(pageValue + 1);
	};
	const handleButtonClick = (operationValue) => {
		operationValue === "prev"
			? setCurretnPage((prev) => prev - 1)
			: setCurretnPage((prev) => prev + 1);
	};
	console.log(
		"curren",
		currentPage,
		parseInt(productList.length / productPerPage)
	);

	return (
		<div className={main_pagenation_container}>
			<div className={item_container}>
				{productList
					.slice(
						currentPage * productPerPage - productPerPage,
						productPerPage * currentPage
					)
					.map((product, index) => (
						<div key={index}>
							<span>{product.title}</span>
							<img src={product.thumbnail} alt={product.title} loading="lazy" />
						</div>
					))}
			</div>

			<div className={button_container}>
				<button
					onClick={() => handleButtonClick("prev")}
					disabled={currentPage === 1 ? true : false}
				>
					Prev
				</button>
				{[
					...Array(parseInt(productList.length / productPerPage))
						.fill(0)
						.map((_, index) => {
							return (
								<button
									key={index}
									style={{
										backgroundColor: index + 1 === currentPage ? "green" : "",
									}}
									onClick={() => handlePageClick(index)}
								>
									{index + 1}
								</button>
							);
						}),
				]}
				<button
					onClick={() => handleButtonClick("next")}
					disabled={
						currentPage === Math.ceil(productList.length / productPerPage)
					}
				>
					Next
				</button>
			</div>
		</div>
	);
};
const PagenationMainComponent = () => {
	const [productList, setProductList] = useState([]);

	//fetching all the products
	const fetchProducts = async () => {
		const response = await fetch(`https://dummyjson.com/products?limit=100`);
		const data = await response.json();
		if (data && data.products.length) {
			setProductList(data.products);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	return (
		<div>
			<Pagenation productPerPage={10} productList={productList} />
		</div>
	);
};

export default PagenationMainComponent;
