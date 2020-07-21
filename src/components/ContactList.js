import React, { Component, useState } from 'react';
import _ from 'lodash';
import { Container, Modal, Button, ListGroup, Card } from 'react-bootstrap';
import Tooltips, { socialNetworks } from './Tooltips.js';

function ContactList() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Контакты
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Мои контакты</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tooltips data={socialNetworks}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default ContactList;
