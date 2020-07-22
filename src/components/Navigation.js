import React, { Component } from 'react';
import logo from '../assets/logo2.svg';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactList from './ContactList.js';
import MainPage from '../pages/MainPage.js';
import Header from '../components/Header.js';
import Home, { skills } from './Main.js';
import Bio from '../pages/Bio.js';

const paragraph = 'Ищу работу во front end разработке. До этого работал в продажах, но в определенный момент';
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
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='ml-auto'>
                                <Nav.Link href='/'>Главная</Nav.Link>
                                <Nav.Link href='/bio'>БИО</Nav.Link>                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Header />
                <Router basename="/">
                    <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route path='/bio' component={Bio} />
                        <Route path='/contacts' component={ContactList} />
                    </Switch>
                </Router>                
            </>
        );
    }
}

export default Navigation;
