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
			url: "https://api-proxy-for-superhero-team.vercel.app/api/",
			data: {
				email: email,
				password: password,
			},
			// headers: {
			// 	"Access-Control-Allow-Origin": "*",
			// 	"Access-Control-Allow-Headers": "*",
			// 	"Content-Type": "*",
			// 	"Access-Control-Allow-Credentials": "true",
			// 	"Access-Control-Allow-Methods": "POST",
			// 	"Access-Control-Max-Age": 86400,
			// },
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
