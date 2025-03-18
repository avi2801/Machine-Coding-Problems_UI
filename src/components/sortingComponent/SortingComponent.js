import React, { useEffect, useState } from "react";
import styles from "./SortingComponent.module.css";

const SortingComponent = () => {
	const { main_sorting_component } = styles;
	const [recipes, setRecipes] = useState();
	const fetchData = async () => {
		const response = await fetch("https://dummyjson.com/recipes");
		const data = await response.json();
		if (data && data.recipes.length) {
			setRecipes(data.recipes);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	const handleSelectClick = (e) => {
		const name = e.target.value;
		setRecipes((prevReceipe) => {
			const newArray = [...prevReceipe]
			switch (name) {
				case 'reviewCount': {
					newArray.sort((a, b) => b.reviewCount - a.reviewCount)
					break;

				};
				case 'rating': {
					newArray.sort((a, b) => b.rating - a.rating)
					break;
				}
				case 'cuisine': {
					newArray.sort((a, b) => a.cuisine.localeCompare(b.cuisine))
					break;
				}
				default: {
					break;
				}
			}
			console.log(newArray)
			return newArray;
		})

	}

	return (
		<div className={main_sorting_component}>
			<h2>Receipes</h2>
			<div style={{ textAlign: 'right', margin: '20px' }}>

				<select onChange={handleSelectClick}>
					<option value="reviewCount">Review</option>
					<option value="rating">Rating</option>
					<option value="cuisine">Cuisine</option>

				</select>
			</div>

			<table>
				<tr>
					<th>Number</th>
					<th>Name</th>
					<th>Cuisine</th>
					<th>Review Count</th>
					<th>Rating</th>
				</tr>
				{recipes?.map((receipe, index) => {
					return (
						<tbody>
							<tr>
								<td>{index + 1}</td>
								<td>{receipe.name}</td>
								<td>{receipe.cuisine}</td>
								<td>{receipe.reviewCount}</td>
								<td>{receipe.rating}</td>
							</tr>
						</tbody>
					)

				})}

			</table>
		</div>
	);
};

export default SortingComponent;
