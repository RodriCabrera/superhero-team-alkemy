import React from "react";
import { useTeam } from "../../utils/hooks/useTeam";
import TeamCard from "../Cards/TeamCard/TeamCard";
import "../../styles.css";

const TeamList = () => {
	const { team } = useTeam();

	return (
		<div className="scroll-box">
			{team &&
				team.map((e) => (
					<TeamCard c={e.character} key={e.character.id}></TeamCard>
				))}
		</div>
	);
};

export default TeamList;
