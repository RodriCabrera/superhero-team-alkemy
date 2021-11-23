import React from "react";
import { Badge, ProgressBar } from "react-bootstrap";

const CharacterStats = ({ c }) => {
	// implementado a partir de que Agent 13 y Black Abbott tienen "null" en sus powerstats.
	function printStat(stat) {
		const value = c.powerstats[stat];
		if (value === "null") {
			return 0;
		} else return value;
	}
	return (
		<>
			<Badge bg="dark">Combat</Badge>
			<ProgressBar now={printStat("combat")} label={c.powerstats.combat} />
			<Badge bg="dark">Durability</Badge>
			<ProgressBar
				now={printStat("durability")}
				label={c.powerstats.durability}
			/>
			<Badge bg="dark">Intelligence</Badge>
			<ProgressBar
				now={printStat("intelligence")}
				label={c.powerstats.intelligence}
			/>
			<Badge bg="dark">Power</Badge>
			<ProgressBar now={printStat("power")} label={c.powerstats.power} />
			<Badge bg="dark">Speed</Badge>
			<ProgressBar now={printStat("speed")} label={c.powerstats.speed} />
			<Badge bg="dark">Strength</Badge>
			<ProgressBar now={printStat("strength")} label={c.powerstats.strength} />
		</>
	);
};

export default CharacterStats;
