import React from "react";
import { Card, Button, Stack } from "react-bootstrap";
import { useTeam } from "../../../utils/hooks/useTeam";
import CardHeader from "../CardHeader";
import CharacterStats from "./CharacterStats";

const TeamCardFrontBody = ({ c, handleClick }) => {
	const { removeCharacter } = useTeam();

	return (
		<Card.Body className="p-0">
			<CharacterStats c={c} />
			{/* Botones: */}
			<Stack direction="horizontal" gap={1} className="mt-3">
				<Button variant="outline-light" onClick={handleClick}>
					Details
				</Button>
				<Button variant="outline-danger" onClick={() => removeCharacter(c.id)}>
					Remove
				</Button>
			</Stack>
		</Card.Body>
	);
};

export default TeamCardFrontBody;
