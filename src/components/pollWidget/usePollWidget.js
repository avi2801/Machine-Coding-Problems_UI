import { useState } from "react";

export const usePollWidget = () => {
	const [currentOption, setCurrentOption] = useState("");
	const [pollHeading, setPollHeading] = useState("");
	const [polls, setPolls] = useState([]);
	const [isDone, setIsDone] = useState(false);

	const addPollHandler = () => {
		if (currentOption.length > 0) {
			setPolls([...polls, { value:currentOption, count: 0 }]);
			setCurrentOption("");
		}
	};

	const doneHandler = () => {
		console.log('clicked')
		if (polls.length > 0 && pollHeading.length > 0) {
			setIsDone(true);
		}
	};


	return { currentOption, setCurrentOption, pollHeading, setPollHeading, polls, isDone,addPollHandler,doneHandler,setPolls }
}
