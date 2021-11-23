import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const RequireAuth = ({ children }) => {
	let { checkAuth, user } = useAuth();
	let navigate = useNavigate();

	useEffect(() => {
		if (!checkAuth()) {
			navigate("/login", { replace: true });
		}
	}, [user, checkAuth, navigate]);

	return children;
};

export default RequireAuth;
