import React from "react";
import { Form, Button, Badge, Col } from "react-bootstrap";
import { Formik } from "formik";
const axios = require("axios").default;

const SearchCharacters = ({ setCandidateList }) => {
	const getCharacters = (name) => {
		axios
			.get(`https://superheroapi.com/api.php/10227573912642267/search/${name}`)
			.then((res) => {
				setCandidateList(res.data.results);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<h1 className="text-light text-center">Search Characters</h1>

			<Formik
				initialValues={{
					character: "",
				}}
				validate={(values) => {
					const errors = {};
					if (!values.character) {
						errors.character = "Enter a character name";
					}
					return errors;
				}}
				onSubmit={(values) => {
					getCharacters(values.character);
				}}
			>
				{(props) => (
					<Form onSubmit={props.handleSubmit}>
						<Form.Group className="d-flex" as={Col}>
							{/* <label htmlFor="character">Character</label> */}
							<Form.Control
								id="character"
								name="character"
								placeholder="Recruit characters for your team"
								type="text"
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								value={props.values.character}
							/>
							<Button type="submit" variant="light">
								<div className="d-flex align-center">Search</div>
							</Button>
						</Form.Group>
						{props.errors.character && props.touched.character && (
							<Badge bg="danger">{props.errors.character}</Badge>
						)}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default SearchCharacters;
