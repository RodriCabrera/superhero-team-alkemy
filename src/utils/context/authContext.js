import React from "react";
const axios = require("axios").default;

export const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
	const [user, setUser] = React.useState({
		email: "",
		isAuth: false,
	});
	const [status, setStatus] = React.useState("ok");

	const login = (email, password) => {
		setStatus("loading");
		axios({
			method: "post",
			url: "http://challenge-react.alkemy.org/",
			data: {
				email: email,
				password: password,
			},
		})
			.then((res) => {
				console.log(res);
				localStorage.setItem("superhero_token", res.data.token);
				setUser({ email: email, isAuth: true });
				console.log(`Logged in. EMAIL: ${email}`);
				setStatus("ok");
			})
			.catch((err) => {
				console.log(err);
				setStatus("error");
			});
	};

	const logout = () => {
		localStorage.removeItem("superhero_token");
		setUser({});
		console.log("Usuario deslogueado.");
	};

	const checkAuth = () => {
		return localStorage.getItem("superhero_token") ? true : false;
	};

	const value = { user, login, logout, checkAuth, status };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
