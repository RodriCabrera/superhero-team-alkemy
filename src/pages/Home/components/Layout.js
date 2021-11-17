import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { GiDoubleFaceMask } from "react-icons/gi";

const Layout = ({ children }) => {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="#home">
						<GiDoubleFaceMask fontSize="2.5rem" className="me-3" />
						Superhero Team
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">Link</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container>{children}</Container>
		</>
	);
};

export default Layout;
