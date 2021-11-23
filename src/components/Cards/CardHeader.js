import React from "react";
import { Card, Stack, Badge } from "react-bootstrap";
const CardHeader = ({ c }) => {
	return (
		<div>
			<Card.Header>
				<Stack direction="horizontal" gap={3}>
					<h4>{c.name}</h4>
					{c.biography.alignment === "good" ? (
						<Badge bg="primary">Good</Badge>
					) : (
						<Badge bg="danger">Bad</Badge>
					)}
				</Stack>
			</Card.Header>
			<div style={{ maxHeight: "500px", overflow: "hidden" }}>
				<Card.Img src={c.image.url} />
			</div>
		</div>
	);
};

export default CardHeader;
