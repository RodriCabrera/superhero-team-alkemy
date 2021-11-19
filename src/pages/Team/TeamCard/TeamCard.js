import React from "react";
import ReactCardFlip from "react-card-flip";
import TeamCardFront from "./TeamCardFront";
import TeamCardBack from "./TeamCardBack";
import { Col } from "react-bootstrap";

const TeamCard = ({ c }) => {
	const [isFlipped, setIsFlipped] = React.useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setIsFlipped((prevState) => !prevState);
	};
	return (
		<Col xs={12} sm={6} md={3} className="mt-3">
			<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
				<TeamCardFront c={c} handleClick={handleClick} />
				<TeamCardBack c={c} handleClick={handleClick} />
			</ReactCardFlip>
		</Col>
	);
};

export default TeamCard;
