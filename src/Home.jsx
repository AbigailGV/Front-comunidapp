/* eslint-disable  */
import React from "react";
import { CustomNavbar } from "./CustomNavbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <Tabs
        defaultActiveKey="food"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="food" title="Food">
          <TabFood />
        </Tab>
        <Tab eventKey="drugs" title="Drugs">
          <TabDrugs />
        </Tab>
        <Tab eventKey="other" title="Otros">
          <TabOther />
        </Tab>
      </Tabs>
    </div>
  );
};

const TabFood = () => {
  return (
    <div>
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://estaticos-cdn.elperiodico.com/clip/e186c9b4-1d98-48f4-811f-a54a20b85dd3_alta-libre-aspect-ratio_default_0.jpg"
          />
          <Card.Body>
            <Card.Title>Water bottles</Card.Title>
            <Card.Text>
              I have 30 bottles of water ready to exchange for some food. It can
              be 3 bananas or one tuna.
            </Card.Text>
            <Button variant="primary">Make exchange</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/03/cosas-que-no-sabias-sobre-el-platano.jpg"
          />
          <Card.Body>
            <Card.Title>Bananas</Card.Title>
            <Card.Text>
              I have 10 bananas that I would like to exchange for some water. It
              can be 10 bottles of water.
            </Card.Text>
            <Button variant="primary">Make exchange</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.eleconomista.com.mx/__export/1621567089316/sites/eleconomista/img/2021/05/20/maiz_reuters_x4x.jpg_554688468.jpg"
          />
          <Card.Body>
            <Card.Title>Corn</Card.Title>
            <Card.Text>
              I have 3 corns that I would like to exchange for some water. It
              can be 3 bottles of water.
            </Card.Text>
            <Button variant="primary">Make exchange</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://eldiariony.com/wp-content/uploads/sites/2/2020/04/latas-de-atun.jpg?quality=60&strip=all&w=960&h=640&crop=1"
          />
          <Card.Body>
            <Card.Title>Tuna</Card.Title>
            <Card.Text>
              I have 8 tuna cans that I would like to exchange for some corn. It
              can be 4 tuna cans.
            </Card.Text>
            <Button variant="primary">Make exchange</Button>
          </Card.Body>
        </Card>
      </div>
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
