import React from "react";
import CandidateCard from "../Cards/CandidateCard";

const Candidates = ({ candidateList }) => {
	return candidateList?.map((c) => <CandidateCard c={c} key={c.id} />);
};

export default Candidates;
