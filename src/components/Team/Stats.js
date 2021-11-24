import React, { useEffect, useState } from "react";
import { Container, Row, Stack, Badge, Col } from "react-bootstrap";
import "../../styles.css";
import { useTeam } from "../../utils/hooks/useTeam";
import TeamStatProgress from "./TeamStatProgress";

let initialStats = {
	intelligence: 0,
	strength: 0,
	speed: 0,
	durability: 0,
	power: 0,
	combat: 0,
};

const Stats = () => {
	const [stats, setStats] = useState(initialStats);
	const [teamSpeciality, setTeamSpeciality] = useState(Object.keys(stats)[0]);
	const [weight, setWeight] = useState(0);
	const [height, setHeight] = useState(0);

	const { team } = useTeam();

	const reduceStat = (heroTeam, stat) => {
		return heroTeam.reduce(
			(sum, sumHero) =>
				sum +
				parseInt(
					sumHero.powerstats[stat] !== "null" ? sumHero.powerstats[stat] : 0
				),
			0
		);
	};

	const reduceMeasure = (heroTeam, measure) => {
		const number =
			heroTeam.reduce(
				(sum, sumHero) =>
					sum + parseInt(sumHero.appearance[measure][1].replace(/kgcm/, "")),
				0
			) / heroTeam.length;
		return isNaN(number) ? 0 : number;
	};

	// Update Team's sum of powerstats every time it is updated (add or remove hero)
	useEffect(() => {
		let newStats = {};

		newStats.intelligence = reduceStat(team, "intelligence");
		newStats.strength = reduceStat(team, "strength");
		newStats.speed = reduceStat(team, "speed");
		newStats.durability = reduceStat(team, "durability");
		newStats.power = reduceStat(team, "power");
		newStats.combat = reduceStat(team, "combat");

		// Sort powerstats - Highest to lowest score
		newStats = Object.fromEntries(
			Object.entries(newStats).sort((a, b) => b[1] - a[1])
		);

		setStats(newStats);
		setTeamSpeciality(Object.keys(newStats)[0]);
	}, [team]);

	useEffect(() => {
		setWeight(Math.round(reduceMeasure(team, "weight")));
		setHeight(Math.round(reduceMeasure(team, "height")));
	}, [team]);

	const statRows = [];
	for (let property in stats) {
		if (property !== teamSpeciality) {
			statRows.push(
				<TeamStatProgress
					key={property}
					stat={property.toUpperCase()}
					value={stats[property]}
					specialityValue={stats[teamSpeciality]}
				/>
			);
		}
	}

	return (
		<Container className="bg-blur ">
			<Row>
				<h4 className="text-light ">Team Powerstats</h4>
			</Row>
			<TeamStatProgress
				stat={teamSpeciality.toUpperCase()}
				value={stats[teamSpeciality]}
				badgeBg="success"
				badgeText="light"
				specialityValue={stats[teamSpeciality]}
			/>
			{statRows.map((elem) => elem)}
			<Row>
				<Col xs={4} sm={3} md={2} xl={1}>
					<Badge bg="secondary">Avg. Weight</Badge>
				</Col>
				<Col>
					<Badge bg="secondary">{weight} kg</Badge>
				</Col>
			</Row>
			<Row>
				<Col xs={4} sm={3} md={2} xl={1}>
					<Badge bg="secondary">Avg. Height</Badge>
				</Col>
				<Col>
					<Badge bg="secondary">{height} cm</Badge>
				</Col>
			</Row>
		</Container>
	);
};

export default Stats;
