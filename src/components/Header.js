import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import background from '../assets/note.jpg';

class Header extends Component {
    render() {
        return (
            <header className='header d-flex flex-column justify-content-center'>
                <>
                    <img
                    width='100%'
                    height='200px'
                    src={background}
                    alt='bg'                    
                    />
                    <h4>Kazantsev</h4>
                </>
            </header>
        );
    }
}

export default Header;
