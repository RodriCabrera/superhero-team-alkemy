import React from "react";
import { Row, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTeam } from "../../utils/hooks/useTeam";
// import Stats from "./Stats";
import TeamList from "./TeamList";
import "../../styles.css";
const Team = () => {
	const { team } = useTeam();
	// console.log("Team", team);

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
		<Container fluid="sm" className="pt-3 h-100">
			{/* <Row>
				<Stats />
			</Row> */}
			<Row className="scroll-box bg-blur">
				<TeamList />
			</Row>
		</Container>
	);
};

export default Team;
