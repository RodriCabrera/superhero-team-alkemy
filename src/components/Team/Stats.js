import React from "react";
import { Stack, ProgressBar, Container } from "react-bootstrap";
import "../../styles.css";
const Stats = () => {
	return (
		<Container className="mt-4">
			<Stack gap={3} className="p-3 bg-blur ">
				<h4 className="text-light">Team Powerstats</h4>
				<ProgressBar now={0} />
				<ProgressBar now={0} />
				<ProgressBar now={0} />
				<ProgressBar now={0} />
			</Stack>
		</Container>
	);
};

export default Stats;
