import React from "react";
import { useTeam } from "../../utils/hooks/useTeam";
import TeamCard from "../Cards/TeamCard/TeamCard";

const TeamList = () => {
	const { team } = useTeam();

	return (
		team &&
		team.map((teamMember) => (
			<TeamCard c={teamMember} key={teamMember.id}></TeamCard>
		))
	);
};

export default TeamList;
