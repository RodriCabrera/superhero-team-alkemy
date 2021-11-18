import React from "react";
import {
	Form,
	Button,
	Badge,
	Col,
	Container,
	Row,
	Spinner,
} from "react-bootstrap";
import { Formik } from "formik";
import Candidates from "./Candidates";
const axios = require("axios").default;

const SearchCharacters = () => {
	const [loading, setLoading] = React.useState(false);
	const [candidateList, setCandidateList] = React.useState([]);

	const getCharacters = (name) => {
		setLoading(true);
		axios
			.get(`https://superheroapi.com/api.php/10227573912642267/search/${name}`)
			.then((res) => {
				setCandidateList(res.data.results);
			})
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	};

	return (
		<Container fluid="sm" className="mt-5">
			<Row>
				<Col className="mt-3">
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
									<Form.Control
										id="character"
										name="character"
										placeholder="Recruit characters for your team"
										type="text"
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										value={props.values.character}
									/>
									{loading ? (
										<Button variant="secondary" disabled>
											<Spinner
												as="span"
												animation="border"
												size="sm"
												role="status"
												aria-hidden="true"
											/>
											<span className="visually-hidden">Loading...</span>
										</Button>
									) : (
										<Button type="submit" variant="light">
											<div className="d-flex align-center">Search</div>
										</Button>
									)}
								</Form.Group>
								{props.errors.character && props.touched.character && (
									<Badge bg="danger">{props.errors.character}</Badge>
								)}
							</Form>
						)}
					</Formik>
				</Col>
			</Row>
			<Row className="pt-3 pb-2">
				<Candidates candidateList={candidateList} />
			</Row>
		</Container>
	);
};

export default SearchCharacters;
