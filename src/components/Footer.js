import React, { Component } from 'react';
import { Row, Container, Col, Nav, Navbar } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container className="justify-content-center">
            <Row>
              <Col md={{ order: 1 }}>
                <Navbar.Brand href="/">
                  <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
      created with React Bootstrap
    </Navbar.Brand>
              </Col>
              <Col md={{ order: 1 }}>
                <Nav className="justify-content-end" activeKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/">Главная</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1" href="/bio">БИО</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </>
    )
  };
}

