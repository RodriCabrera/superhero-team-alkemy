import React from "react";
import CharacterCard from "./CandidateCard";

const Candidates = ({ candidateList }) => {
	return candidateList?.map((c) => <CharacterCard c={c} key={c.id} />);
};

export default Candidates;
