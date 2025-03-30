import React from "react";
import PlayerRow from "./PlayerRow";

const LeaderBoard = ({ players }) => {
	const newPlayerArray = [...players].sort((a, b) => b.score - a.score);
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
			{newPlayerArray.length > 0 && (
				<PlayerRow
					newPlayerArray={newPlayerArray}
					heading={["Name", "Id", "Score"]}
				/>
			)}
		</div>
	);
};

export default LeaderBoard;
