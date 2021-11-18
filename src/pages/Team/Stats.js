import React from "react";
import { Stack, ProgressBar } from "react-bootstrap";
const Stats = () => {
	return (
		<Stack gap={3} className="bg-dark p-3">
			<ProgressBar variant="success" now={40} />
			<ProgressBar variant="info" now={20} />
			<ProgressBar variant="warning" now={60} />
			<ProgressBar variant="danger" now={80} />
		</Stack>
	);
};

export default Stats;
