import { useState } from 'react';
import styles from './App.module.css';
import { Information, Field } from './components';
import { EMPTY_FIELDS } from './constants';
import { checkWin, checkDraw } from './helpers';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(EMPTY_FIELDS);

	const onFieldClick = (index) => {
		const isEmprtyField = !field[index];

		if (!isGameEnded && isEmprtyField) {
			const newFields = [...field];

			newFields[index] = currentPlayer;
			const newIsGameEnded = checkWin(newFields, currentPlayer);
			const newIsDraw = checkDraw(newFields);

			setField(newFields);
			setIsGameEnded(newIsGameEnded);
			setIsDraw(newIsDraw);
			setCurrentPlayer((f) => (f === 'X' ? 'O' : 'X'));
		}
	};
	const onResetClick = () => {
		setField(EMPTY_FIELDS);
		setIsDraw(false);
		setIsGameEnded(false);
		setCurrentPlayer('X');
	};

	const btnState = isDraw || isGameEnded;

	return (
		<>
			<div className={styles.app}>
				<h1>Игра крестики-нолики</h1>
				<Information
					isDraw={isDraw}
					isGameEnded={isGameEnded}
					currentPlayer={currentPlayer}
				/>
				<Field field={field} onFieldClick={onFieldClick} />
				<button
					className={styles.button}
					disabled={!btnState}
					onClick={onResetClick}
				>
					Начать новую игру
				</button>
			</div>
		</>
	);
};
