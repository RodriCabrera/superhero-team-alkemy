import React from "react";
import { Col, Card, Button, Badge } from "react-bootstrap";
import { useTeam } from "../../utils/hooks/useTeam";
import CardHeader from "./CardHeader";

const CandidateCard = ({ c }) => {
	const { addCharacter, removeCharacter, isInTeam } = useTeam();
	React.useEffect(() => {
		isInTeam(c.id);
	}, [isInTeam, c.id]);

	return (
		<Col xs={6} sm={4} lg={3} className="mt-3 h-100">
			<Card bg="dark" className="text-light">
				<CardHeader c={c} />

				<Card.Body>
					{/* Botones: */}
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
