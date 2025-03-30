const PlayerRow = ({ newPlayerArray, heading }) => {
	return (
		<>
			<div
				style={{ display: "flex", gap: "5px", justifyContent: "space-evenly" }}
			>
				{heading.map((title) => (
					<span>{title}</span>
				))}
			</div>
			{newPlayerArray?.map((player, index) => {
				return (
					<div
						style={{
							display: "flex",
							gap: "5px",
							justifyContent: "space-evenly",
						}}
					>
						<span>{player.name}</span>
						<span>{player.id}</span>
						<span>{player.score}</span>
					</div>
				);
			})}
		</>
	);
};

export default PlayerRow;
