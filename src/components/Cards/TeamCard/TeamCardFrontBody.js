import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useTeam } from "../../../utils/hooks/useTeam";
import CharacterStats from "./CharacterStats";

const TeamCardFrontBody = ({ c, handleClick }) => {
	const { removeCharacter } = useTeam();

	return (
		<>
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
		</>
	);
};

export default TeamCardFrontBody;
