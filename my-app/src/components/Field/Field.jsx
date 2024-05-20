import styles from './Field.module.css';

export const Field = ({ field, onFieldClick }) => {
	const onClick = (index) => {
		if (onFieldClick) {
			onFieldClick(index);
		}
	};

	return (
		<>
			<div className={styles.field}>
				{field.map((x, index) => (
					<div
						key={index}
						className={styles.cell}
						onClick={() => onClick(index)}
					>
						{'[' + x + ']'}
					</div>
				))}
			</div>
		</>
	);
};
