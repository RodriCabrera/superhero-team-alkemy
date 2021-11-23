import React from "react";
import CardHeader from "./CardHeader";
import { Card } from "react-bootstrap";
// Card unificada.

const CharacterCard = ({ c, children }) => {
	return (
		<Card bg="dark" className="text-light">
			<CardHeader c={c} />
			<Card.Body className="p-2">{children}</Card.Body>
		</Card>
	);
};

export default CharacterCard;
