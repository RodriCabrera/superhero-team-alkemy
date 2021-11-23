import React from "react";
import {
	Navbar as BsNavbar,
	Container,
	Nav as BsNav,
	Badge,
} from "react-bootstrap";
import { BsBoxArrowRight, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiDoubleFaceMask } from "react-icons/gi";
import { useTeam } from "../../utils/hooks/useTeam";
import { useAuth } from "../../utils/hooks/useAuth";

const Navbar = () => {
	const { team } = useTeam();
	const { logout } = useAuth();

	return (
		<BsNavbar bg="dark" variant="dark" expand="lg" fixed="top">
			<Container fluid="xxl">
				<BsNavbar.Brand as={Link} to="/">
					<GiDoubleFaceMask fontSize="2.5rem" className="me-3" />
					Superhero Team
				</BsNavbar.Brand>
				<BsNavbar.Toggle aria-controls="basic-navbar-nav" />
				<BsNavbar.Collapse id="basic-navbar-nav">
					<BsNav className="ms-auto">
						<BsNav.Link as={Link} to="/search">
							Search <BsSearch fontSize="1.2rem" color="light" />
						</BsNav.Link>
						<BsNav.Link as={Link} to="/team">
							My Team{" "}
							<Badge bg="light" text="dark">
								{team.length}/6
							</Badge>
						</BsNav.Link>
						<BsNav.Link onClick={() => logout()}>
							Logout <BsBoxArrowRight fontSize="1.5rem" color="light" />
						</BsNav.Link>
					</BsNav>
				</BsNavbar.Collapse>
			</Container>
		</BsNavbar>
	);
};

export default Navbar;
