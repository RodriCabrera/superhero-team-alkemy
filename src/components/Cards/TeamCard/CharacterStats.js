import React from "react";
import { Container } from "react-bootstrap";
import StatProgressBar from "./StatProgressBar";

const CharacterStats = ({ c }) => {
	return (
		<Container className="p-0">
			<StatProgressBar c={c} statName="combat" />
			<StatProgressBar c={c} statName="durability" />
			<StatProgressBar c={c} statName="intelligence" />
			<StatProgressBar c={c} statName="power" />
			<StatProgressBar c={c} statName="speed" />
			<StatProgressBar c={c} statName="strength" />
		</Container>
	);
};

export default CharacterStats;
