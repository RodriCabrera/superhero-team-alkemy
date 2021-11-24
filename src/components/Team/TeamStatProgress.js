import React from "react";
import { Row, Col, ProgressBar, Badge } from "react-bootstrap";

const TeamStatProgress = ({
	stat,
	value,
	badgeBg = "light",
	badgeText = "dark",
	specialityValue,
}) => {
	return (
		<div>
			<Row className="d-flex align-items-center">
				<Col xs={4} sm={3} md={2} xl={1}>
					<Badge className="p-1" pill bg={badgeBg} text={badgeText}>
						{stat}
					</Badge>
				</Col>
				<Col>
					<ProgressBar
						animated
						now={value}
						label={value}
						max={specialityValue + 15}
					/>
				</Col>
			</Row>
		</div>
	);
};

export default TeamStatProgress;
