import React from "react";
import { Stack, ProgressBar, Container } from "react-bootstrap";
import "../../styles.css";
const Stats = () => {
	return (
		<Container className="mt-2">
			<Stack gap={2} className="p-3 bg-blur ">
				<h4 className="text-light m-0">Team Powerstats</h4>
				<ProgressBar now={0} />
				<ProgressBar now={0} />
				<ProgressBar now={0} />
				<ProgressBar now={0} />
			</Stack>
		</Container>
	);
};

export default Stats;
