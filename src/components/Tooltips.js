import React, { Component, useState, useRef } from 'react';
import { Card, Button, Accordion } from 'react-bootstrap';
import _ from 'lodash';


class Tooltips extends Component {

  render() {
    const { data } = this.props;
    // this.state = {id: _.uniqueId()};

    if (data.length === 0) {
      return null;
    }

    const networks = data.map(({ label, description, id }, index) => (
      <React.Fragment key={_.uniqueId()}>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="dark" eventKey={id}>
              {label}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={id}>
            <Card.Body>{description}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </React.Fragment>
    ));

    return (
      <>
        <Accordion defaultActiveKey="0">
          {networks}
        </Accordion>
      </>
    );
  }
}

export const socialNetworks = [  
  { label: 'GitHub', description: 'https://github.com/possesion', id: '2' },
  { label: 'Gmail', description: 'kazantsevgennadiy@gmail.com', id: '3' },
  { label: 'Facebook', description: 'https://www.facebook.com/Kazantsevhp', id: '4' },
  { label: 'Telegram',  description: '@possesion', id: '5' }
];

export default Tooltips;
