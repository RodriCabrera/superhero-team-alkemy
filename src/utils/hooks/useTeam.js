import React from "react";
import { TeamContext } from "../context/teamContext";

export const useTeam = () => {
	const context = React.useContext(TeamContext);
	if (!context) {
		throw new Error(
			"El hook useTeam debe ser usado dentro de un TeamContext Provider."
		);
	}
	return context;
};
