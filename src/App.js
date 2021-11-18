import React from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import SearchCharacters from "./pages/Search/SearchCharacters";
import { useTeam } from "./pages/Team/context";

function App() {
	const { team } = useTeam();
	console.log("TEAM", team);
	return (
		<Router>
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="/" element={<Home />}>
					<Route index element={<Team />} />
					<Route path="team" element={<Team />} />
					<Route path="search" element={<SearchCharacters />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
