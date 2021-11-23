import React from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./components/Team/Team";
import SearchCharacters from "./components/Search/SearchCharacters";
import { useTeam } from "./utils/hooks/useTeam";

function App() {
	const { team, calculateGood } = useTeam();
	console.log(calculateGood());
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
