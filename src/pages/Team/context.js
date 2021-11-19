import React from "react";

export const TeamContext = React.createContext(null);

export function TeamProvider({ children }) {
	const [team, setTeam] = React.useState([]);
	// const [teamStats, setTeamStats] = React.useState({
	// 	combat: 0,
	// 	durability: 0,
	// 	intelligence: 0,
	// 	power: 0,
	// 	speed: 0,
	// 	strength: 0,
	// });

	const calculateStats = () => {};

	const caluclateGood = () => {
		let good = 0;
		let bad = 0;
		console.log(team);
		for (let elem of team) {
			console.log(elem.character);
		}
	};

	const isInTeam = (id) => {
		return team.some((elem) => elem.character.id === id);
	};

	const addCharacter = (character) => {
		if (team.length >= 6) {
			return;
		} else if (isInTeam(character.id)) {
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
		caluclateGood,
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
