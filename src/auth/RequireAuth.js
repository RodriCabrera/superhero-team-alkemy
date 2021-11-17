import { useAuth } from "./hooks";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const RequireAuth = ({ children }) => {
	let { checkAuth, user } = useAuth();
	let navigate = useNavigate();
	console.log(checkAuth());

	useEffect(() => {
		if (!checkAuth()) {
			console.log("Check auth dio false");
			navigate("/login", { replace: true });
		}
	}, [user, checkAuth, navigate]);

	return children;
};

export default RequireAuth;
