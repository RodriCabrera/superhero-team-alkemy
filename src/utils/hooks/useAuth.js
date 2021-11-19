import React from "react";
import { AuthContext } from "../context/authContext";

export function useAuth() {
	return React.useContext(AuthContext);
}
