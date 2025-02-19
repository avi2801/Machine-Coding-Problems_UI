import React, { useEffect, useState } from "react";

const PagenationComponent = () => {
	const [products, setProducts] = useState<any>([]);
	const [pageNumber, setPageNumber] = useState<number>(1);

	useEffect(() => {
		fetchProduct();
	}, []);

	const fetchProduct = async () => {
		const response = await fetch("https://dummyjson.com/products?limit=100");
		const data = await response.json();
		if (data && data.products && Array.isArray(products)) {
			setProducts(data.products);
		}
	};

	const handlePageClick = (indexValue: number) => {
		setPageNumber(indexValue);
	};
	return (
		<>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{products
					.slice(pageNumber * 10 - 10, pageNumber * 10)
					.map((items: any, index: number) => {
						return (
							<img
								style={{
									margin: "20px",
									padding: "15px",
									border: "1px solid black",
									backgroundColor: "#e8e3e3",
									borderRadius: "5px",
									width: "200px",
									height: "250px",
								}}
								src={items.thumbnail}
								alt="product_images"
							/>
						);
					})}
			</div>
			<div style={{ margin: "4px", display: "flex", justifyContent: "center" }}>
				{[...Array(products.length / 10)].map((_, index) => {
					return (
						<button
							onClick={() => handlePageClick(index + 1)}
							style={{ margin: "10px", cursor: "pointer" }}
						>
							{index + 1}
						</button>
					);
				})}
			</div>
		</>
	);
};

export default PagenationComponent;
