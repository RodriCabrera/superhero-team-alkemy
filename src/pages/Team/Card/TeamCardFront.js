import React from "react";
import { Card, Badge, Button, Stack, ProgressBar } from "react-bootstrap";
import { useTeam } from "../context";

const TeamCardFront = ({ c, handleClick }) => {
	const { removeCharacter } = useTeam();

	// implementado a partir de que Agent 13 tiene "null" en sus powerstats.
	function printStat(stat) {
		const value = c.powerstats[stat];
		if (value === "null") {
			return 0;
		} else return value;
	}
	return (
		<Card bg="dark" className="text-light">
			<div style={{ height: "300px", overflow: "hidden" }}>
				<Card.Img variant="top" src={c.image.url} />
			</div>
			<Card.Body>
				<Stack direction="horizontal" gap={3}>
					<Card.Title className="mt-2">{c.name}</Card.Title>
					{c.biography.alignment === "good" ? (
						<Badge bg="primary">Good</Badge>
					) : (
						<Badge bg="danger">Bad</Badge>
					)}
				</Stack>
				<Badge bg="dark">Combat</Badge>
				<ProgressBar
					now={printStat("combat")}
					label={c.powerstats.combat}
				/>{" "}
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
				<ProgressBar
					now={c.powerstats.strength}
					label={c.powerstats.strength}
				/>
				<Stack direction="horizontal" gap={1} className="mt-3">
					<Button variant="outline-light" onClick={handleClick}>
						Details
					</Button>
					<Button
						variant="outline-danger"
						onClick={() => removeCharacter(c.id)}
					>
						Remove
					</Button>
				</Stack>
			</Card.Body>
		</Card>
	);
};

export default TeamCardFront;
