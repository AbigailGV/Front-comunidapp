/* eslint-disable  */

import { CustomNavbar } from "./CustomNavbar";
import Table from "react-bootstrap/Table";

// Aquí van los exchanges del usuario :D
export const YourExchanges = () => {
  return (
    <div className="App">
      <CustomNavbar />
      <h1>Your Exchanges</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Apples</td>
            <td>3</td>
            <td>@mdo09</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Water</td>
            <td>10</td>
            <td>@fatt65</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Juice</td>
            <td>5</td>
            <td>@twister3</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
