import React, { Component } from 'react';
import { ButtonGroup, ButtonToolbar, Button, Accordion, Card, Row, Col } from 'react-bootstrap';

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
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="card-header">
                        <h3>Order Summary</h3>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div>
                                <Row>
                                    <Col md={6}>
                                        Total
                                                    </Col>
                                    <Col md={6} className="product-order-review-summery-price">
                                        US $1.57
                                                    </Col>
                                </Row>
                            </div>
                            <ButtonToolbar aria-label="Toolbar with button groups" className="submit-button">
                                <ButtonGroup className="mr-2" aria-label="First group">
                                    <Button as="input" variant="secondary" type="submit" value="Submit" />{' '}
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}