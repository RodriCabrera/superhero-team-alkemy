import React from "react";
const axios = require("axios").default;

export const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
	const [user, setUser] = React.useState({
		email: "",
		password: "",
		isAuth: false,
	});
	const [loading, setLoading] = React.useState(false);

	const login = (email, password) => {
		setLoading(true);
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
				setUser({ email: email, password: password });
				console.log(
					`Logged in. EMAIL: ${email}, PASSWORD: ${password}, token:${res.data.token}`
				);
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setLoading(false);
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

	const value = { user, login, logout, checkAuth, loading };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
