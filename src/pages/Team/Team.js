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
	return (
		<>
			<h1 className="text-light text-center mt-3">My Superhero Team</h1>
			<Row>
				<Stats />
			</Row>
			<Row xs={6} sm={4}>
				<TeamList />
			</Row>
		</>
	);
};

export default Team;
