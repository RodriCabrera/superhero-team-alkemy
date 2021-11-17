import React from "react";
import { Col, Card, Button, Badge } from "react-bootstrap";

const Candidates = ({ candidateList }) => {
	return (
		<>
			{candidateList?.map((c) => (
				<Col key={c.id} xs={6} sm={4} md={3} className="mt-3">
					<Card bg="dark" className="text-light">
						<Card.Img variant="top" src={c.image.url} />
						<Card.Body>
							{c.biography.alignment === "good" ? (
								<Badge bg="primary">Good</Badge>
							) : (
								<Badge bg="danger">Bad</Badge>
							)}

							<Card.Title className="mt-2">{c.name}</Card.Title>
							<Button variant="outline-secondary" className="w-100">
								Recruit
							</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
		</>
	);
};

export default Candidates;
