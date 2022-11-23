/* eslint-disable  */
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiUser } from "react-icons/bi";

export const Home = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="">
          <Navbar.Brand href="/">ComunidApp</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/your-exchanges">Your exchanges</Nav.Link>
            <Nav.Link href="/your-resources">Your resources</Nav.Link>
            <Nav.Link href="/profile">
              <BiUser />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
