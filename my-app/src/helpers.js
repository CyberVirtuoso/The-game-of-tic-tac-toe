import { WIN_PATTERNS } from './constants';

export const checkWin = (field, currentPlayer) => {
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

export const checkDraw = (field) => {
	let draw = true;
	for (const unit of field) {
		if (unit === '') {
			draw = false;
		}
	}
	return draw;
};
