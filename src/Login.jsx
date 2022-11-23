/* eslint-disable  */
//aqui va el login :D

import {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function formHandler(e) {
		e.preventDefault();
		//aqui va el código de login
		console.log("formhandler");
		console.log("email:", email, "\n", "password:", password);
	}

	return (
		<div className="App">
			<h1>Inicia Sesión</h1>
			<Form onSubmit={(e) => formHandler(e)}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};
