import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
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
	const [stats, setStats] = React.useState(initialStats);
	const [teamSpeciality, setTeamSpeciality] = React.useState(
		Object.keys(stats)[0]
	);
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

	const statRows = [];
	for (let property in stats) {
		if (property !== teamSpeciality) {
			statRows.push(
				<TeamStatProgress
					key={property}
					stat={property.toUpperCase()}
					value={stats[property]}
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
			/>
			{statRows.map((elem) => elem)}
		</Container>
	);
};

export default Stats;
