import React, { useState } from "react";

const PollWidget = ({ question, options, onVote }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [voted, setVoted] = useState(false);

	const handleVoteClick = () => {
		if (!selectedOption) return;
		onVote(selectedOption);
		setVoted(true)
	}
	return (
		<div>
			<h1>{question}</h1>
			<ul>
				{options?.map((option, index) => {
					return (
						<li key={option.id}>
							<label htmlFor="poll">
								<input
									type="radio"
									name="poll"
									value={option.id}
									checked={selectedOption === option.id}
									onChange={() => setSelectedOption(option.id)}
								/>
								{option.text} {option.votes} votes
							</label>
						</li>
					);
				})}
			</ul>
			<button onClick={handleVoteClick} disabled={!selectedOption || voted}>
				{voted ? "Voted" : "Vote"}
			</button>
		</div>
	);
};

export default PollWidget;
