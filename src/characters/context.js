import React from "react";
const axios = require("axios").default;

export const CharactersContext = React.createContext(null);

export function AuthProvider({ children }) {
	const [user, setUser] = React.useState({
		characters: [],
	});
	const [loading, setLoading] = React.useState(false);

	const signin = (email, password) => {
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

	const value = { user, signin, loading };

	return (
		<CharactersContext.Provider value={value}>
			{children}
		</CharactersContext.Provider>
	);
}
