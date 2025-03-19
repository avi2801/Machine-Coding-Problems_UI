import React, { useState } from "react";
import styles from "./Game.module.css";
import useGame from "../../hooks/useGame";

const Game = () => {
	const { main_container, board_container, reset_button } = styles;
	const { board, handleClickHandler,getGameMessage,resetGame } = useGame();

	return (
		<div className={main_container}>
			<div>
				<h2>Tic tac Toe</h2>
				<span>{ getGameMessage()}</span>
				<button className={reset_button} onClick={resetGame}>Reset Game</button>
			</div>
			<div className={board_container}>
				{board.map((b, index) => {
					return <button onClick={() => handleClickHandler(index)}>{b}</button>;
				})}
			</div>
		</div>
	);
};

export default Game;
