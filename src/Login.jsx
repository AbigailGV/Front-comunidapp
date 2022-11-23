/* eslint-disable  */
//aqui va el login :D

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login = () => {
	function formHandler(e) {
		e.preventDefault();
		//aqui va el código de login
		console.log("formHandler");
	}

	return (
		<div className="App">
			<h1>Inicia Sesión</h1>
			<Form onSubmit={(e) => formHandler(e)}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};
