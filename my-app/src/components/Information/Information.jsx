import styles from './Information.module.css';

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	let message = '';

	if (isDraw) {
		message = 'Ничья';
	} else if (!isDraw && isGameEnded) {
		message = `Победа ${currentPlayer}`;
	} else if (!isDraw && !isGameEnded) {
		message = `Ходит: ${currentPlayer}`;
	}

	return (
		<div className={isDraw || isGameEnded ? styles.green : styles.black}>
			{message}
		</div>
	);
};
