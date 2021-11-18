import React from "react";

export const TeamContext = React.createContext(null);

export function TeamProvider({ children }) {
	const [team, setTeam] = React.useState([]);
	const [teamStats, setTeamStats] = React.useState({
		combat: 0,
		durability: 0,
		intelligence: 0,
		power: 0,
		speed: 0,
		strength: 0,
	});

	const calculateStats = () => {
		let combat = 0;
		let durability = 0;
		let intelligence = 0;
		let power = 0;
		let speed = 0;
		let strength = 0;

		for (let elem of team) {
			combat += elem.character.powerstats.combat;
			durability += elem.character.powerstats.durability;
			intelligence += elem.character.powerstats.intelligence;
			power += elem.character.powerstats.power;
			speed += elem.character.powerstats.speed;
			strength += elem.character.powerstats.strength;
		}
	};

	const isInTeam = (id) => {
		return team.some((elem) => elem.character.id === id);
	};

	const addCharacter = (character) => {
		if (isInTeam(character.id)) {
			return;
		}
		setTeam((prevState) => [...prevState, { character }]);
	};

	const removeCharacter = (id) => {
		setTeam((prevState) =>
			prevState.filter((elem) => elem.character.id !== id)
		);
	};

	const value = {
		team,
		addCharacter,
		removeCharacter,
		isInTeam,
		calculateStats,
	};

	return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
}

export const useTeam = () => {
	const context = React.useContext(TeamContext);
	if (!context) {
		throw new Error(
			"El hook useTeam debe ser usado dentro de un TeamContext Provider."
		);
	}
	return context;
};
