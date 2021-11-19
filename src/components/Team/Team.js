import React from "react";
import { Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTeam } from "./context";
import Stats from "./Stats";
import TeamList from "./TeamList";

const Team = () => {
	const { team, calculateStats } = useTeam();
	console.log("calculatestats", calculateStats());
	console.log("Team", team);

	// Si no hay equipo:
	if (team.length === 0) {
		return (
			<>
				<h3 className="text-light text-center mt-3">
					You haven't recruited any characters for your team yet.
				</h3>
				<div className="d-grid gap-2">
					<Button as={Link} to="/search" variant="info" size="lg">
						Proceed to the recruiting page
					</Button>
				</div>
			</>
		);
	}
	// Si hay equipo:
	return (
		<>
			<Row>
				<Stats />
			</Row>
			<Row className="p-3 scroll-box">
				<TeamList />
			</Row>
		</>
	);
};

export default Team;
