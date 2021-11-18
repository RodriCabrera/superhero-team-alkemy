import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./auth/context";
import { TeamProvider } from "./pages/Team/context";
ReactDOM.render(
	<React.StrictMode>
		<AuthProvider value={{}}>
			<TeamProvider>
				<App />
			</TeamProvider>
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
