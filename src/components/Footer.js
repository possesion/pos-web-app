import React, { Component } from 'react';
import { Row, Container, Col, Nav, Navbar } from 'react-bootstrap';

export default class Footer extends React.Component {
    render() {
        return (
            <>
            <Navbar bg="dark" variant="dark">
            <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
      created with React Bootstrap
    </Navbar.Brand>
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/">Главная</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" href="/bio">БИО</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" href="/contacts">Контакты</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>

            </Container>
                </Navbar>
            </>
        )
    };
}

