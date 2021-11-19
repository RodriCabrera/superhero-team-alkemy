import React from "react";
import { Col, Card, Button, Badge } from "react-bootstrap";
import { useTeam } from "../Team/context";

const CandidateCard = ({ c }) => {
	const { addCharacter, removeCharacter, isInTeam } = useTeam();
	React.useEffect(() => {
		isInTeam(c.id);
	}, [isInTeam, c.id]);

	return (
		<Col key={c.id} xs={6} sm={4} md={3} className="mt-3">
			<Card bg="dark" className="text-light">
				<div style={{ maxHeight: "500px", overflow: "hidden" }}>
					<Card.Img variant="top" src={c.image.url} />
				</div>
				<Card.Body>
					{c.biography.alignment === "good" ? (
						<Badge bg="primary">Good</Badge>
					) : (
						<Badge bg="danger">Bad</Badge>
					)}

					<Card.Title className="mt-2">{c.name}</Card.Title>
					{isInTeam(c.id) ? (
						<Button
							variant="outline-danger"
							className="w-100"
							onClick={() => {
								removeCharacter(c.id);
							}}
						>
							Remove
						</Button>
					) : (
						<Button
							variant="outline-success"
							className="w-100"
							onClick={() => addCharacter(c)}
						>
							Recruit
						</Button>
					)}
				</Card.Body>
			</Card>
		</Col>
	);
};

export default CandidateCard;
