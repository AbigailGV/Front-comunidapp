/* eslint-disable  */
import React from "react";
import { CustomNavbar } from "./CustomNavbar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

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
          <h1>Contenido Alimentos</h1>
        </Tab>
        <Tab eventKey="medicinas" title="Medicinas">
          <h1>Contenido Medicinas</h1>
        </Tab>
        <Tab eventKey="otros" title="Otros">
          <h1>Contenido otros </h1>
        </Tab>
      </Tabs>
    </div>
  );
};
