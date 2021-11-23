import React from "react";
import { Row, Badge, ProgressBar, Col } from "react-bootstrap";
const StatProgressBar = ({ c, statName }) => {
	// implementado a partir de que Agent 13 y Black Abbott tienen "null" en sus powerstats.

	function printStat(stat) {
		const value = c.powerstats[stat];
		if (value === "null") {
			return 0;
		} else return value;
	}

	return (
		<Row>
			<Col xs={5}>
				<Badge bg="dark">{statName.toUpperCase()}</Badge>
			</Col>
			<Col>
				<ProgressBar now={printStat(statName)} label={c.powerstats[statName]} />
			</Col>
		</Row>
	);
};

export default StatProgressBar;
