/* eslint-disable  */
import React from "react";
import {CustomNavbar} from "./CustomNavbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Home = () => {
	return (
		<div>
			<CustomNavbar />
			<Tabs
				defaultActiveKey="alimentos"
				id="uncontrolled-tab-example"
				className="mb-3"
			>
				<Tab eventKey="alimentos" title="Alimentos">
					<TabFood />
				</Tab>
				<Tab eventKey="medicinas" title="Medicinas">
					<TabDrugs />
				</Tab>
				<Tab eventKey="otros" title="Otros">
					<TabOther />
				</Tab>
			</Tabs>
		</div>
	);
};

const TabFood = () => {
	return (
		<div>
			<h1>Food Tab</h1>
			<Card style={{width: "18rem"}}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

const TabDrugs = () => {
	return (
		<div>
			<h1>Drugs Tab</h1>
		</div>
	);
};

const TabOther = () => {
	return (
		<div>
			<h1>Other Tab</h1>
		</div>
	);
};
