import React, { Component } from 'react';
import Main from '../components/Main.js';
import { skills } from '../components/Main.js';


class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Main data={skills} />
            </React.Fragment>
        );
    }
}

export default MainPage;
