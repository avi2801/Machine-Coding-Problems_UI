import React, { useState, useEffect } from "react";
import styles from "./MemoryGame.module.css";

const MemoryGame = () => {
	const [gridValue, setGridValue] = useState(0);
	const [cards, setCards] = useState([]);
	const [matched, setMatched] = useState([]);
	const [flippedCards, setFlippedCards] = useState([]);

	useEffect(() => {
		if (gridValue) generateShuffleCards();
	}, [gridValue]);

	useEffect(() => {
		if (flippedCards.length === 2) {
			checkIfMatched();
		}
	}, [flippedCards]);

	const generateShuffleCards = () => {
		let totalCards = gridValue * gridValue;
		let pairs = totalCards / 2;
		let numberPair = Array.from({ length: pairs }, (_, i) => i + 1);
		numberPair = [...numberPair, ...numberPair].sort(() => Math.random() - 0.5);

		const shuffledCards = numberPair.map((value, index) => ({
			id: index,
			value,
			isFlipped: false,
		}));

		setCards(shuffledCards);
		setMatched([]);
		setFlippedCards([]);
	};

	const checkIfMatched = () => {
		const [first, second] = flippedCards;
		if (cards[first].value === cards[second].value) {
			setMatched([...matched, first, second]);
		}

		setTimeout(() => {
			setCards((prevCards) =>
				prevCards.map((card, index) =>
					flippedCards.includes(index) && !matched.includes(index)
						? { ...card, isFlipped: false }
						: card
				)
			);
			setFlippedCards([]);
		}, 800);
	};

	const handleCardFlip = (index) => {
		if (flippedCards.length === 2 || flippedCards.includes(index)) return;

		const updatedFlipped = [...flippedCards, index];
		setFlippedCards(updatedFlipped);

		setCards((prev) =>
			prev.map((card, i) => (i === index ? { ...card, isFlipped: true } : card))
		);
	};

	const handleInputChange = (e) => {
		const value = parseInt(e.target.value);
		if (value >= 2 && value <= 8 && value % 2 === 0) {
			setGridValue(value);
		} else {
			setGridValue('')
		}
	};

	return (
		<div className={styles.main_container}>
			<div>
				<h3>Memory Game</h3>
				<input
					type="number"
					onChange={handleInputChange}
					value={gridValue || ""}
					min={2}
					max={8}
					step={2}
				/>
			</div>
			<div className={styles.matrix_card}>
				{cards.map((card, index) => (
					<div
						key={index}
						className={`${styles.card_input_block} ${
							matched.includes(index) ? styles.newBackGround : ""
						} ${card.isFlipped ? styles.cardFlipped : ""}`}
						onClick={() => handleCardFlip(index)}
					>
						{card.isFlipped || matched.includes(index) ? card.value : "?"}
					</div>
				))}
			</div>
		</div>
	);
};

export default MemoryGame;
