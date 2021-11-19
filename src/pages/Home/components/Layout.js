import React from "react";
import "../../../styles.css";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { GiDoubleFaceMask } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsBoxArrowRight, BsSearch } from "react-icons/bs";
import { useAuth } from "../../../utils/auth/hooks";
import { useTeam } from "../../../components/Team/context";

const Layout = ({ children }) => {
	const { logout } = useAuth();
	const { team } = useTeam();
	return (
		<>
			{/* separado a otro componente el NAVBAR */}
			{/* deshacer Layout. porque solo tiene navbar */}
			<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
				<Container fluid="xxl">
					<Navbar.Brand as={Link} to="/">
						<GiDoubleFaceMask fontSize="2.5rem" className="me-3" />
						Superhero Team
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link as={Link} to="/search">
								Search <BsSearch fontSize="1.2rem" color="light" />
							</Nav.Link>
							<Nav.Link as={Link} to="/team">
								My Team{" "}
								<Badge bg="light" text="dark">
									{team.length}/6
								</Badge>
							</Nav.Link>
							<Nav.Link onClick={() => logout()}>
								Logout <BsBoxArrowRight fontSize="1.5rem" color="light" />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container fluid="xxl" className="pt-5">
				{children}
			</Container>
		</>
	);
};

export default Layout;
