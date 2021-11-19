import React from "react";
import { useTeam } from "./context";

import TeamCard from "./Card/TeamCard";

const TeamList = () => {
	const { team } = useTeam();

	// return team?.map((e) => <TeamCard key={e.character.id} c={e.character} />);
	return team.map((e) => (
		<TeamCard c={e.character} key={e.character.id}></TeamCard>
	));
};

export default TeamList;
