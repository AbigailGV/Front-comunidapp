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
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://chedrauimx.vtexassets.com/arquivos/ids/9033220/7501007533872_00.jpg?v=638047777917600000"
          />
          <Card.Body>
            <Card.Title>Tylenol</Card.Title>
            <Card.Text>
              I have Tylenol ready to exchange for some alcohol.
            </Card.Text>
            <Button variant="primary">Make exchange</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY6l3wEf9TgVBqkB3cTrZkPB0GDtS0mgkRQg&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Alcohol</Card.Title>
            <Card.Text>
              I have 2 bottles of alcohol that I would like to exchange for
              tylenol.
            </Card.Text>
            <Button variant="primary">Make exchange</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://http2.mlstatic.com/D_NQ_NP_874179-MLM47986042458_102021-O.jpg"
          />
          <Card.Body>
            <Card.Title>Gauze</Card.Title>
            <Card.Text>
              I have 5 gauzes that I would like to exchange for some tylenol.
            </Card.Text>
            <Button variant="primary">Make exchange</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/5/7501287610478_.jpg"
          />
          <Card.Body>
            <Card.Title>Advil</Card.Title>
            <Card.Text>
              I have advil that I would like to exchange for some gauzes.
            </Card.Text>
            <Button variant="primary">Make exchange</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const TabOther = () => {
  return (
    <div>
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://maglitemexico.com.mx/wp-content/uploads/2021/06/maglite_incandescentes_1024x600.png"
          />
          <Card.Body>
            <Card.Title>Lanterns</Card.Title>
            <Card.Text>
              I have 5 lanterns ready to exchange for some clothes.
            </Card.Text>
            <Button variant="primary">Make exchange</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://m.media-amazon.com/images/I/71P28O72LPL._AC_SL1500_.jpg"
          />
          <Card.Body>
            <Card.Title>Batteries</Card.Title>
            <Card.Text>
              I have 10 betteries that I would like to exchange for some
              lanterns.
            </Card.Text>
            <Button variant="primary">Make exchange</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Folding_table.jpg"
          />
          <Card.Body>
            <Card.Title>Table</Card.Title>
            <Card.Text>
              I have 1 table that I would like to exchange for two chairs.
            </Card.Text>
            <Button variant="primary">Make exchange</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
