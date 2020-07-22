import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../pages/MainPage.js';
import Bio from '../pages/Bio.js';
import { Container } from 'react-bootstrap';


class Content extends Component {
    render() {
        return (
            <div>
                <Container>
                <Route exact path='/' component={MainPage} />
                <Route path='/bio' component={Bio} />
                </Container>
            </div>
        );
    }
}

export default Content;

