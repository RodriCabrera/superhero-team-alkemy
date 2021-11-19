import React from "react";
import { Button, Form, Stack, Card, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import { useAuth } from "../../auth/hooks";
import { useNavigate } from "react-router";
import "../../styles.css";

const Login = () => {
	const { login, loading, checkAuth } = useAuth();
	let navigate = useNavigate();

	React.useEffect(() => {
		if (checkAuth()) {
			navigate("/", { replace: true });
		}
	}, [checkAuth, navigate]);

	return (
		<div className="bg-login">
			<Card
				className="p-0 text-center w-50"
				bg="dark"
				text="light"
				style={{ minWidth: "270px" }}
			>
				<Card.Header>
					<h1>Welcome to Superhero Team</h1>
				</Card.Header>
				<Card.Body>
					<Formik
						initialValues={{
							email: "",
							password: "",
						}}
						validate={(values) => {
							const errors = {};
							if (!values.email) {
								errors.email = "Ingresar email";
							} else if (
								!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
							) {
								errors.email = "El email ingresado no es válido";
							} else if (!values.password) {
								errors.password = "Ingresar contraseña";
							}
							return errors;
						}}
						onSubmit={(values) => {
							login(values.email, values.password);
						}}
					>
						{(props) => (
							<Form onSubmit={props.handleSubmit}>
								<Form.Group className="mb-3">
									<label htmlFor="email">Email</label>
									<Form.Control
										id="email"
										name="email"
										placeholder="challenge@alkemy.org"
										type="email"
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										value={props.values.email}
									/>
									{props.errors.email && props.touched.email && (
										<Form.Text className="text-danger">
											{props.errors.email}
										</Form.Text>
									)}
								</Form.Group>
								<Form.Group className="mb-3">
									<label htmlFor="password">Password</label>
									<Form.Control
										type="password"
										id="password"
										name="password"
										placeholder="react"
										onChange={props.handleChange}
										onBlur={props.handleBlur}
										value={props.values.password}
									/>
									{props.errors.password && props.touched.password && (
										<Form.Text className="text-danger">
											{props.errors.password}
										</Form.Text>
									)}
								</Form.Group>
								{loading ? (
									<Spinner animation="border" role="status">
										<span className="visually-hidden">Loading...</span>
									</Spinner>
								) : (
									<Stack direction="horizontal" gap={3}>
										<Button type="submit">Submit</Button>
										<Button onClick={props.handleReset} variant="danger">
											Reset
										</Button>
									</Stack>
								)}
							</Form>
						)}
					</Formik>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Login;
