import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { GiDoubleFaceMask } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BsBoxArrowRight, BsSearch } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { useAuth } from "../../../auth/hooks";

const Layout = ({ children }) => {
	const { logout } = useAuth();
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
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
								My Team <RiTeamLine fontSize="1.5rem" color="light" />
							</Nav.Link>
							<Nav.Link onClick={() => logout()}>
								Logout <BsBoxArrowRight fontSize="1.5rem" color="light" />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container>{children}</Container>
		</>
	);
};

export default Layout;
