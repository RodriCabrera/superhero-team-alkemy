import React from "react";
import { AuthContext } from "./context";

export function useAuth() {
	return React.useContext(AuthContext);
}
