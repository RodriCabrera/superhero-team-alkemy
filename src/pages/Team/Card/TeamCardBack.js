import React from "react";
import { Table, Card, Button } from "react-bootstrap";
import TeamCard from "./TeamCard";

const TeamCardBack = ({ c, handleClick }) => {
	console.log(c);
	return (
		<Card bg="dark" className="text-light">
			<Card.Body>
				<Card.Title className="mt-2 text-center">{c.name}</Card.Title>
				<Table striped hover variant="dark">
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
									<li>{alias}</li>
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
				<Button variant="outline-light" onClick={handleClick}>
					Back
				</Button>
			</Card.Body>
		</Card>
	);
};

export default TeamCardBack;
