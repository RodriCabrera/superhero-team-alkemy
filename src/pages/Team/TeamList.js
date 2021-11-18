import React from "react";
import { useTeam } from "./context";
import TeamCard from "./TeamCard";

const TeamList = () => {
	const { team } = useTeam();

	return team?.map((e) => <TeamCard key={e.character.id} c={e.character} />);
};

export default TeamList;
