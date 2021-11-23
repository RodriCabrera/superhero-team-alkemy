import React from "react";
import ReactCardFlip from "react-card-flip";
import TeamCardFrontBody from "./TeamCardFrontBody";
import TeamCardBack from "./TeamCardBack";
import { Col } from "react-bootstrap";
import CharacterCard from "../CharacterCard";

const TeamCard = ({ c }) => {
	const [isFlipped, setIsFlipped] = React.useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setIsFlipped((prevState) => !prevState);
	};
	return (
		<Col xs={12} sm={6} md={4} className="mt-3">
			<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
				<CharacterCard c={c}>
					<TeamCardFrontBody c={c} handleClick={handleClick} />
				</CharacterCard>
				<TeamCardBack c={c} handleClick={handleClick} />
			</ReactCardFlip>
		</Col>
	);
};

export default TeamCard;
