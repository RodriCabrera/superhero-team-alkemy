import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./auth/context";

ReactDOM.render(
	<React.StrictMode>
		<AuthProvider value={{}}>
			<App />
		</AuthProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
