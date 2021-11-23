import React from "react";
import { useTeam } from "../../utils/hooks/useTeam";
import TeamCard from "../Cards/TeamCard/TeamCard";

const TeamList = () => {
	const { team } = useTeam();

	return (
		team &&
		team.map((e) => <TeamCard c={e.character} key={e.character.id}></TeamCard>)
	);
};

export default TeamList;
