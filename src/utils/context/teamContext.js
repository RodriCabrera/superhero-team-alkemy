import React from "react";

export const TeamContext = React.createContext(null);

export function TeamProvider({ children }) {
	const [team, setTeam] = React.useState([]);

	const calculateStats = () => {};

	function checkCharacter(character) {
		let good = 0;
		let bad = 0;

		if (team.length < 6) {
			team.forEach((teamMember) => {
				teamMember.biography.alignment === "good" ? good++ : bad++;
			});

			if (character.biography.alignment === "good" && good > 2) {
				alert("You can only have 3 superheroes in your team, add villains!");
				return false;
			} else if (character.biography.alignment === "bad" && bad > 2) {
				alert("You can only have 3 villans, add superheroes!");
				return false;
			}
			return true;
		}
		alert("You cannot have more than 6 characters on your team");
		return false;
	}

	const isInTeam = (id) => {
		return team.some((elem) => elem.id === id);
	};

	const addCharacter = (character) => {
		if (checkCharacter(character)) {
			setTeam((prevState) => [...prevState, character]);
		}
	};

	const removeCharacter = (id) => {
		setTeam((prevState) => prevState.filter((elem) => elem.id !== id));
	};

	const value = {
		team,
		isInTeam,
		addCharacter,
		removeCharacter,
		calculateStats,
	};

	return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>;
}
