import React from "react";
import { Table, Card, Button } from "react-bootstrap";

const TeamCardBack = ({ c, handleClick }) => {
	return (
		<Card bg="dark" className="text-light">
			<Card.Body className="p-0">
				<Card.Title className="mt-1 text-center">{c.name}</Card.Title>
				<Table striped hover variant="dark" className="p-0">
					<tbody>
						<tr>
							<td>Weight</td>
							<td>{c.appearance.weight[1]}</td>
						</tr>
						<tr>
							<td>Height</td>
							<td>{c.appearance.height[1]}</td>
						</tr>
						<tr>
							<td>Name</td>
							<td>{c.biography["full-name"]}</td>
						</tr>
						<tr>
							<td>Alias</td>
							<td>
								{c.biography.aliases.map((alias) => (
									<li key={alias}>{alias}</li>
								))}
							</td>
						</tr>
						<tr>
							<td>Eye Color</td>
							<td>{c.appearance["eye-color"]}</td>
						</tr>
						<tr>
							<td>Hair Color</td>
							<td>{c.appearance["hair-color"]}</td>
						</tr>
						<tr>
							<td>Workplace</td>
							<td>{c.work.base}</td>
						</tr>
						<tr>
							<td>Occupation</td>
							<td>{c.work.occupation}</td>
						</tr>
					</tbody>
				</Table>
				<div className="d-grid gap-2">
					<Button variant="outline-light" onClick={handleClick}>
						Back
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default TeamCardBack;
