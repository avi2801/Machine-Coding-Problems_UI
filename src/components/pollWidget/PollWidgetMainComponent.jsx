import React, { useState } from "react";
import PollWidget from "./PollWidget";

const PollWidgetMainComponent = () => {
	const [pollData, setPollData] = useState({
		question: "Which framework do you prefer?",
		options: [
			{ id: "react", text: "React", votes: 10 },
			{ id: "vue", text: "Vue", votes: 5 },
			{ id: "angular", text: "Angular", votes: 3 },
		],
	});

	const handleVote = (selectedId) => {
		setPollData((prevPoll) => ({
			...prevPoll,
			options: prevPoll.options.map((data) =>
				data.id === selectedId ? { ...data, votes: data.votes + 1 } : data
			),
		}));
	};
	return (
		<div>
			<PollWidget {...pollData} onVote={handleVote} />
		</div>
	);
};

export default PollWidgetMainComponent;
