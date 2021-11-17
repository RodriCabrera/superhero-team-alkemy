import React from "react";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "./auth/hooks";
import RequireAuth from "./auth/RequireAuth";
import Home from "./pages/Home/Home";

function App() {
	const { checkAuth } = useAuth();
	console.log(checkAuth());
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<RequireAuth>
							<Home />
						</RequireAuth>
					}
				/>
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
