import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Jumbotron fluid className='jumbo'>
                <Container>
                    <h2>Welcome to my page!</h2>
                </Container>
            </Jumbotron>
        );
    }
}

export default Header;

