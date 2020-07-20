import React, { Component } from 'react';
import logo from '../assets/logo2.svg';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from '../pages/Contacts.js';
import Home from './Main.js';
import Bio from '../pages/Bio.js';
import { skills } from './Main';


class Navigation extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand='md' bg='dark' variant='dark' className='justify-content-center'>
                    <Container >
                        <Navbar.Brand href='/'>
                            <img
                                src={logo}
                                height='20%'
                                width='20%'
                                className='d-inline-block align-top'
                                alt='Search'
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='ml-auto'>
                                <Nav.Link href='/'>Главная</Nav.Link>
                                <Nav.Link href='/bio'>БИО</Nav.Link>
                                <Nav.Link href='/contacts'>Контакты</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}


export default Navigation;
