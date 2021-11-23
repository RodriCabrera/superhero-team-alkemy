import React from "react";
import "../../styles.css";
import { Outlet } from "react-router";
import RequireAuth from "../../utils/auth/RequireAuth";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "react-bootstrap";

const Home = () => {
	return (
		<RequireAuth>
			<div className="bg-home">
				<Navbar />
				<Container fluid="xxl" className="pt-5 h-100">
					<Outlet />
				</Container>
			</div>
		</RequireAuth>
	);
};

export default Home;
