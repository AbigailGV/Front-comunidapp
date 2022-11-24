/* eslint-disable  */

import { CustomNavbar } from "./CustomNavbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Aquí van los resources del usuario :D
export const YourResources = () => {
  return (
    <div className="App">
      <CustomNavbar />
      <div className="cards  mt-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://estaticos-cdn.elperiodico.com/clip/e186c9b4-1d98-48f4-811f-a54a20b85dd3_alta-libre-aspect-ratio_default_0.jpg"
          />
          <Card.Body>
            <Card.Title>Water bottles</Card.Title>
            <Card.Text>You have 20 bottles of water.</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/03/cosas-que-no-sabias-sobre-el-platano.jpg"
          />
          <Card.Body>
            <Card.Title>Bananas</Card.Title>
            <Card.Text>You have 15 bananas.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
