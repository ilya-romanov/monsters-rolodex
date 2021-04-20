import Card from '../card/card.component.jsx';
import './card-list.styles.css';

export const CardList = ({ monsters }) => {
	return (
		<div className="card-list">
			{monsters.map((monster) => (
				<Card {...{ key: monster.id, monster }} />
			))}
		</div>
	);
};

