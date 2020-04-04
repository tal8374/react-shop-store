import React, { Component } from 'react';
import { ButtonGroup, ButtonToolbar, Button, Accordion, Card, Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import './ConfirmOrder.css';
import OrderSummery from '../../components/OrderSummery/OrderSummery';
import StoreItems from '../../components/StoreItems/StoreItems';

export default class ConfirmOrder extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {

        return (
            <div className="container">
                <Row>
                    <Col md={{ span: 8 }}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="card-header">
                                    <h3>Shipping Information</h3>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div class="radio-block">
                                            <div class="radio-content">
                                                <input id="shipping-information-1" type="radio" name="radio" checked />
                                                <label for="shipping-information-1">
                                                    <Row>
                                                        <Col md={2}>
                                                            <span></span>
                                                        </Col>
                                                        <Col md={10}>
                                                            <div className="label-content">name, phone</div>
                                                            <div className="label-content">street</div>
                                                            <div className="label-content">city, country</div>
                                                            <div className="label-content">
                                                                <ButtonToolbar aria-label="Toolbar with button groups">
                                                                    <ButtonGroup className="mr-2" aria-label="First group">
                                                                        <Button variant="secondary" size="sm">
                                                                            Edit
                                                                </Button>
                                                                    </ButtonGroup>
                                                                    <ButtonGroup className="mr-2" aria-label="Second group">
                                                                        <Button variant="secondary" size="sm">
                                                                            Set as default
                                                                </Button>
                                                                    </ButtonGroup>
                                                                </ButtonToolbar>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </label>
                                            </div><br />
                                            <div class="radio-content">
                                                <input id="shipping-information-2" type="radio" name="radio" checked />
                                                <label for="shipping-information-2">
                                                    <Row>
                                                        <Col md={2}>
                                                            <span></span>
                                                        </Col>
                                                        <Col md={10}>
                                                            <div className="label-content">name, phone</div>
                                                            <div className="label-content">street</div>
                                                            <div className="label-content">city, country</div>
                                                            <div className="label-content">
                                                                <ButtonToolbar aria-label="Toolbar with button groups">
                                                                    <ButtonGroup className="mr-2" aria-label="First group">
                                                                        <Button variant="secondary" size="sm">
                                                                            Edit
                                                                </Button>
                                                                    </ButtonGroup>
                                                                    <ButtonGroup className="mr-2" aria-label="Second group">
                                                                        <Button variant="secondary" size="sm">
                                                                            Set as default
                                                                </Button>
                                                                    </ButtonGroup>
                                                                </ButtonToolbar>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </label>
                                            </div><br />
                                            <div class="radio-content">
                                                <input id="shipping-information-3" type="radio" name="radio" checked />
                                                <label for="shipping-information-3">
                                                    <Row>
                                                        <Col md={2}>
                                                            <span></span>
                                                        </Col>
                                                        <Col md={10}>
                                                            <div className="label-content">name, phone</div>
                                                            <div className="label-content">street</div>
                                                            <div className="label-content">city, country</div>
                                                            <div className="label-content">
                                                                <ButtonToolbar aria-label="Toolbar with button groups">
                                                                    <ButtonGroup className="mr-2" aria-label="First group">
                                                                        <Button variant="secondary" size="sm">
                                                                            Edit
                                                                </Button>
                                                                    </ButtonGroup>
                                                                    <ButtonGroup className="mr-2" aria-label="Second group">
                                                                        <Button variant="secondary" size="sm">
                                                                            Set as default
                                                                </Button>
                                                                    </ButtonGroup>
                                                                </ButtonToolbar>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </label>
                                            </div><br />
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="card-header">
                                    <h3>Payment Methods</h3>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div class="radio-block">
                                            <div class="radio-content">
                                                <input id="visa1" type="radio" name="radio" checked />
                                                <label for="visa1">
                                                    <Row>
                                                        <Col md={2}>
                                                            <span></span>
                                                        </Col>
                                                        <Col md={10}>
                                                            <div className="visa">VISA **** 1234</div>
                                                        </Col>
                                                    </Row>
                                                </label>
                                            </div><br />
                                            <div class="radio-content">
                                                <input id="visa2" type="radio" name="radio" checked />
                                                <label for="visa2">
                                                    <Row>
                                                        <Col md={2}>
                                                            <span></span>
                                                        </Col>
                                                        <Col md={10}>
                                                            <div className="visa">VISA **** 1234</div>
                                                        </Col>
                                                    </Row>
                                                </label>
                                            </div><br />
                                            <div class="radio-content">
                                                <input id="visa3" type="radio" name="radio" checked />
                                                <label for="visa3">
                                                    <Row>
                                                        <Col md={2}>
                                                            <span></span>
                                                        </Col>
                                                        <Col md={10}>
                                                            <div className="visa">VISA **** 1234</div>
                                                        </Col>
                                                    </Row>
                                                </label>
                                            </div><br />
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion defaultActiveKey="0">
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="card-header">
                                    <h3>Order Review</h3>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <StoreItems></StoreItems>
                                </Accordion.Collapse>
                        </Accordion>
                    </Col>
                    <Col md={{ span: 4 }} className="space-down">
                        <Row>
                            <OrderSummery></OrderSummery>
                        </Row>
                    </Col>

                </Row>
            </div>
        )
    }
}