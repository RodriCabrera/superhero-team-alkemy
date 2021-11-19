import React from "react";
import { useTeam } from "./context";

import TeamCard from "./Card/TeamCard";

const TeamList = () => {
	const { team } = useTeam();

	return (
		team &&
		team.map((e) => <TeamCard c={e.character} key={e.character.id}></TeamCard>)
	);
};

export default TeamList;
