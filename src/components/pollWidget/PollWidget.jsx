import React, { useState } from "react";
import style from "./PollWidget.module.css";

import { usePollWidget } from "./usePollWidget";

const PollWidget = () => {
	const {
		main_poll_container,
		heading_block,
		input_block,
		poll_list_block,
		button_class,
	} = style;

	const {
		currentOption,
		setCurrentOption,
		pollHeading,
		setPollHeading,
		polls,
		isDone,
		addPollHandler,
		doneHandler,
		setPolls,
	} = usePollWidget();

	return (
		<div className={main_poll_container}>
			{!isDone ? (
				<div>
					<h4 style={{ textAlign: "center" }}>Poll Widget</h4>
					<div className={heading_block}>
						<label>Enter the heading for the poll</label>
						<input
							type="text"
							value={pollHeading}
							onChange={(e) => setPollHeading(e.target.value)}
						/>
					</div>
					<div className={input_block}>
						<label>Enter the options for the poll</label>
						<input
							type="text"
							value={currentOption}
							onChange={(e) => setCurrentOption(e.target.value)}
						/>
						<button className={button_class} onClick={addPollHandler}>
							Add Item to poll
						</button>
					</div>
					<div className={poll_list_block}>
						{renderPolls(polls)}
						<button onClick={doneHandler} className={button_class}>
							Done
						</button>
					</div>
				</div>
			) : (
				<ProgressPoll
					polls={polls}
					pollHeading={pollHeading}
					setPolls={setPolls}
				/>
			)}
		</div>
	);
};

const renderPolls = (polls, isCount, setPolls) => {
	const { poll_block, list_block } = style;
	const handleItemClick = (clickedIndex) => {
		setPolls((prev) =>
			prev.map((p, index) =>
				index === clickedIndex ? { ...p, count: p.count + 1 } : p
			)
		);
	};
	return (
		<ul className={isCount ? list_block : ""}>
			{polls?.map((poll, index) => (
				<div>
					{isCount ? (
						<li
							onClick={() => handleItemClick(index)}
							className={poll_block}
						>{`${poll.value} : ${poll.count}`}</li>
					) : (
						<li className={poll_block}>{`${poll.value}`}</li>
					)}
				</div>
			))}
		</ul>
	);
};

function ProgressPoll({ polls, pollHeading, setPolls }) {
	return (
		<div>
			{pollHeading}
			{renderPolls(polls, true, setPolls)}
		</div>
	);
}

export default PollWidget;
