import React, { useState } from "react";
import styles from "./Game.module.css";
import GameBoard from "@/components/game/GameBoard";
import LeaderBoard from "@/components/game/LeaderBoard";


const Game = () => {
	const { mainContainer } = styles;
	const [players, setPlayers] = useState([]);
	return (
		<div className={mainContainer}>
			<GameBoard players={players} setPlayers={setPlayers} />
			<LeaderBoard players={players} />
		</div>
	);
};

export default Game;
