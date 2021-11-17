import React from "react";
import Layout from "./components/Layout";
import SearchCharacters from "./components/SearchCharacters";
import "./home.css";
import { Container, Row } from "react-bootstrap";
import Candidates from "./components/Candidates";

const Home = () => {
	const [candidateList, setCandidateList] = React.useState([]);
	console.log("CandidateList:", candidateList);
	return (
		<div className="bg-home">
			<Layout>
				<Container fluid="md" className="mt-5">
					<Row>
						<SearchCharacters setCandidateList={setCandidateList} />
					</Row>
					<Row className="pt-3 pb-2">
						<Candidates candidateList={candidateList} />
					</Row>
				</Container>
			</Layout>
		</div>
	);
};

export default Home;
