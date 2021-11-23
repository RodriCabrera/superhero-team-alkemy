import React from "react";
import { Card, Button } from "react-bootstrap";
import { useTeam } from "../../../utils/hooks/useTeam";

const CandidateCardBody = ({ c }) => {
	const { addCharacter, removeCharacter, isInTeam } = useTeam();
	React.useEffect(() => {
		isInTeam(c.id);
	}, [isInTeam, c.id]);

	return (
		<Card.Body className="p-0">
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
	);
};

export default CandidateCardBody;
