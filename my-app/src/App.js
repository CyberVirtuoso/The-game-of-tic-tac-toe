import { useState } from 'react';
import styles from './App.module.css';
import { Information, Field } from './components';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	return (
		<>
			<div className={styles.app}>
				<h1>Игра крестики-нолики</h1>
				<Information
					isDraw={isDraw}
					isGameEnded={isGameEnded}
					currentPlayer={currentPlayer}
				/>
				<Field
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					isDraw={isDraw}
					setIsDraw={setIsDraw}
					isGameEnded={isGameEnded}
					setIsGameEnded={setIsGameEnded}
				/>
			</div>
		</>
	);
};
