import React from "react";
import { Col, Card, Badge, Button, Stack } from "react-bootstrap";
import { useTeam } from "./context";

const TeamCard = ({ c }) => {
	const { removeCharacter } = useTeam();

	return (
		<Col xs={6} sm={4} className="mt-3">
			<Card bg="dark" className="text-light">
				<Card.Img variant="top" src={c.image.url} />
				<Card.Body>
					{c.biography.alignment === "good" ? (
						<Badge bg="primary">Good</Badge>
					) : (
						<Badge bg="danger">Bad</Badge>
					)}

					<Card.Title className="mt-2">{c.name}</Card.Title>
					<Stack direction="horizontal" gap={1}>
						<Button variant="outline-light">Details</Button>
						<Button
							variant="outline-danger"
							onClick={() => removeCharacter(c.id)}
						>
							Remove
						</Button>
					</Stack>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default TeamCard;
