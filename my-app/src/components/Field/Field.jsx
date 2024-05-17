import styles from './Field.module.css';
import { WIN_PATTERNS } from '../../constants/WIN_PATTERNS';

const checkWin = (field, currentPlayer) => {
	let win = false;
	for (const pattern of WIN_PATTERNS) {
		if (win) {
			break;
		} else {
			win = true;
		}
		for (const unit of pattern) {
			if (field[unit] !== currentPlayer) win = false;
		}
	}
	return win;
};

const checkDraw = (field) => {
	let draw = true;
	for (const unit of field) {
		if (unit === '') {
			draw = false;
		}
	}
	return draw;
};

const clickNewGame = (setIsGameEnded, setIsDraw, setField, setCurrentPlayer) => {
	setField(['', '', '', '', '', '', '', '', '']);
	setIsDraw(false);
	setIsGameEnded(false);
	setCurrentPlayer('X');
};

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
}) => {
	const clickCell = (index) => {
		if (!isGameEnded && field[index] !== 'X' && field[index] !== 'O') {
			const newField = field;
			let newIsGameEnded = isGameEnded;
			let newIsDraw = isDraw;

			newField[index] = currentPlayer;
			setField(newField);

			newIsGameEnded = checkWin(field, currentPlayer);
			if (newIsGameEnded) {
				setIsGameEnded(newIsGameEnded);
				return;
			}

			newIsDraw = checkDraw(field);
			if (newIsDraw) {
				setIsDraw(newIsDraw);
				return;
			}

			setCurrentPlayer((f) => (f === 'X' ? 'O' : 'X'));
		}
	};

	const btnState = isDraw || isGameEnded;

	return (
		<>
			<div className={styles.field}>
				{field.map((x, index) => (
					<div
						key={index}
						className={styles.cell}
						onClick={() => clickCell(index)}
					>
						{'[' + x + ']'}
					</div>
				))}
			</div>
			<button
				className={styles.button}
				disabled={!btnState}
				onClick={() =>
					clickNewGame(setIsGameEnded, setIsDraw, setField, setCurrentPlayer)
				}
			>
				Начать новую игру
			</button>
		</>
	);
};
