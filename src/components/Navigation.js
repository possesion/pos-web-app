import React, { Component } from 'react';
import logo from '../assets/logo.png';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from '../pages/Contacts.js';
import Home from '../pages/Home.js';

class Navigation extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
                <Container style={{ height: '70px'}}>
                    <Navbar.Brand href='/'>
                        <img
                        src={logo}
                        height='20%'
                        width='20%'
                        className='d-inline-block align-top'
                        alt='Search'
                        /> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Nav.Link href='/'>Новости</Nav.Link>
                            <Nav.Link href='/contacts'>БИО</Nav.Link>
                            <Nav.Link href='/contacts'>Контакты</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route path='/contacts' component={Contacts} />
                </Switch>
            </Router>
            </>
        );
    }
}


export default Navigation;
