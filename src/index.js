import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./utils/context/authContext";
import { TeamProvider } from "./utils/context/teamContext";

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
