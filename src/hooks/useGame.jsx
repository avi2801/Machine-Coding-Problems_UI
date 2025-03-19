import { useState } from "react";
const useGame = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [isXTurn, setIsXTurn] = useState(true);

	const WinninPatterns = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[2, 5, 8],
		[1, 4, 7],
		[0, 4, 8],
		[2, 4, 6],
	];

	const calculateWinner = () => {
		for (let i = 0; i < WinninPatterns.length; i++) {
			let [a, b, c] = WinninPatterns[i];
			console.log(a, b, c);
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a];
			}
		}

		return null;
	};

	const handleClickHandler = (index) => {
		const winner = calculateWinner();
		if (winner || board[index]) return;
		const newArray = [...board];
		newArray[index] = isXTurn ? "X" : "0";
		setIsXTurn(!isXTurn);
		setBoard(newArray);
	};

	const getGameMessage = () => {
		const winner = calculateWinner();
		if (winner) {
			return `Player ${winner} wins`;
		}
		if (!board.includes(null)) {
			return "Match is a draw";
		}
		return `Player ${isXTurn ? "X" : "0"} turn`;
	};
	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setIsXTurn(true)
	}

	return { board, handleClickHandler, getGameMessage, resetGame };
};

export default useGame;
