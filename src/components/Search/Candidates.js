import React from "react";
import CandidateCardBody from "../Cards/CandidateCard/CandidateCardBody";
import { Col } from "react-bootstrap";
import CharacterCard from "../Cards/CharacterCard";
const Candidates = ({ candidateList }) => {
	return (
		<>
			{candidateList?.map((c) => (
				<Col key={c.id} xs={12} sm={6} md={4} className="mt-3">
					<CharacterCard c={c}>
						<CandidateCardBody c={c} />
					</CharacterCard>
				</Col>
			))}
		</>
	);
};

export default Candidates;
