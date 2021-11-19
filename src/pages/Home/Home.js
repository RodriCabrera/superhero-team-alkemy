import React from "react";
import Layout from "./components/Layout";
import "../../styles.css";
import RequireAuth from "../../auth/RequireAuth";
import { Outlet } from "react-router";

const Home = () => {
	return (
		<RequireAuth>
			<div className="bg-home">
				<Layout>
					<Outlet />
				</Layout>
			</div>
		</RequireAuth>
	);
};

export default Home;
