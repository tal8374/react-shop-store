import React, { Component } from 'react';
import { ButtonGroup, ButtonToolbar, Button, Accordion, Card, Row, Col } from 'react-bootstrap';
import OrderSummeryStyle from './OrderSummery.module.css';

export default class OrderySummery extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {

        return (
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" >
                        <h3>Order Summary</h3>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div>
                                <Row>
                                    <Col md={6}>
                                        Total
                                                    </Col>
                                    <Col md={6}>
                                        US $1.57
                                                    </Col>
                                </Row>
                            </div>
                            <ButtonToolbar aria-label="Toolbar with button groups" >
                                <ButtonGroup className="mr-2" aria-label="First group">
                                    <Button className={OrderSummeryStyle.submitButton} as="input" variant="secondary" type="submit" value="Submit" />{' '}
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}