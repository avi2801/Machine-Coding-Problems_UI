import React, { useState } from "react";

const GameBoard = ({ players, setPlayers }) => {
	const [currentPlayer, setCurrentPlayer] = useState({
		name: "",
		id: "",
		score: 0,
	});
	const [randomNumber, setRandomNumberPicked] = useState(0);

	const addPlayer = () => {
		while (players.length !== 10) {
			const randomId = Math.ceil(Math.random() * 10);
			const isPresent = players.some((player) => player.id === randomId);
			if (!isPresent) {
				const newPlayer = { ...currentPlayer, id: randomId };
				setPlayers((prev) => [...prev, newPlayer]);
				setCurrentPlayer({ name: "", id: 0, score: 0 });
				break;
			}
		}
	};
	const gameStart = () => {
		const randomNumberPicked = Math.ceil(Math.random() * 10);
		setRandomNumberPicked(randomNumberPicked);
		setPlayers((players) =>
			players.map((player) =>
				player.id === randomNumberPicked
					? { ...player, score: player.score + 1 }
					: player
			)
		);
	};

	return (
		<div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
			<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
				<input
					type="text"
					placeholder="Add Player Name"
					value={currentPlayer.name}
					onChange={(e) =>
						setCurrentPlayer((prev) => ({ ...prev, name: e.target.value }))
					}
				/>
				{players.length <= 10 && (
					<button onClick={addPlayer}>Add Player</button>
				)}
			</div>
			{players.length >= 2 && (
				<div>
					<button style={{ marginRight: "10px" }} onClick={gameStart}>
						Start Game
					</button>
					<span>{randomNumber}</span>
				</div>
			)}
		</div>
	);
};

export default GameBoard;
