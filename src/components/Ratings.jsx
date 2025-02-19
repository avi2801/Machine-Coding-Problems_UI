import React, { useEffect, useState } from "react";
import { data } from "../data/reviews";

const Ratings = () => {
	const [reviewData, setReviewData] = useState([]);
  const [searchParam, setSearchParam] = useState();
  const [searchedReview,setSearchedReview] = useState([])

	useEffect(() => {
		setReviewData(data);
	}, []);

	const handleChange = (e) => {
		const sortOption = e.target.value;
		// Create a new copy of the array before sorting
		const sortedReviews = [...reviewData];

		if (sortOption === "Rating") {
			sortedReviews.sort((a, b) => b.rating - a.rating);
		} else if (sortOption === "Date") {
			sortedReviews.sort(
				(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
			);
		} else if (sortOption === "HelpFul") {
			sortedReviews.sort((a, b) => b.helpful - a.helpful);
		}

		setReviewData(sortedReviews);
	};

	const handleInputChange = (e) => {
		setSearchParam(e.target.value);
		const newData = reviewData.filter((review) =>
			review?.review?.toLowerCase().includes(searchParam?.toLowerCase())
		);
		setSearchedReview(newData)
  };
  const handleBlue = () => {
    setSearchedReview([])
  }

  return (

    <div>
       <ul>
        {searchedReview.map((review) => (
          <li>
            <p>
							<strong>Review:</strong> {review.review}
						</p>
						<p>
							<strong>Rating:</strong> {review.rating}
						</p>
						<p>
							<strong>Date:</strong> {review.date}
						</p>
						<p>
							<strong>Helpful:</strong> {review.helpful}
						</p>
          </li>
        ))}
      </ul>
			<select onChange={handleChange}>
				<option value="HelpFul">HelpFul</option>
				<option value="Date">Date</option>
				<option value="Rating">Rating</option>
			</select>
			<input
				type="text"
				placeHolder="Search for the review"
        onChange={handleInputChange}
        onBlur={handleBlue}
			/>
			<ul>
				{reviewData.map((review) => (
					<li key={review.id}>
						<p>
							<strong>Review:</strong> {review.review}
						</p>
						<p>
							<strong>Rating:</strong> {review.rating}
						</p>
						<p>
							<strong>Date:</strong> {review.date}
						</p>
						<p>
							<strong>Helpful:</strong> {review.helpful}
						</p>
					</li>
				))}
      </ul>

		</div>
	);
};

export default Ratings;
