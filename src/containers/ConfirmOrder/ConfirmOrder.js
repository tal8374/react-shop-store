import React, { Component } from 'react';
import { ButtonGroup, ButtonToolbar, Button, Accordion, Card, Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import './ConfirmOrder.css';

export default class Items extends Component {
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
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="card-header">
                                    <h3>Order Review</h3>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div>
                                            <h5>Seller: seller's name</h5>
                                            <hr></hr>
                                            <Row>
                                                <Col md={3}>
                                                    <img className="product-order-review-single-image" src="https://images-na.ssl-images-amazon.com/images/I/51nspdPkIdL._AC_UL260_SR200,260_.jpg"></img>
                                                </Col>
                                                <Col md={6}>
                                                    <div>
                                                        Men's Bark texture automatic buckle Belt young people black simple buckle highgrade luxury Business belt Ceinture Homme 3.5cmp56
                                                </div>
                                                    <div>
                                                        <div><span className="product-order-review-single-header">color:</span> <span className="product-property-content">black</span></div>
                                                        <div><span className="product-order-review-single-header">Belt Length:</span> <span className="product-property-content">120cm</span></div>
                                                    </div>
                                                    <div className="product-order-review-single-price">US $1.57</div>
                                                    <div>Estimated Delivery Time:31-52 Days</div>
                                                </Col>
                                                <Col md={3}>3 of 3</Col>
                                            </Row>
                                        </div>
                                        <div>
                                            <h5>Seller: seller's name</h5>
                                            <hr></hr>
                                            <Row>
                                                <Col md={3}>
                                                    <img className="product-order-review-single-image" src="https://images-na.ssl-images-amazon.com/images/I/51nspdPkIdL._AC_UL260_SR200,260_.jpg"></img>
                                                </Col>
                                                <Col md={6}>
                                                    <div>
                                                        Men's Bark texture automatic buckle Belt young people black simple buckle highgrade luxury Business belt Ceinture Homme 3.5cmp56
                                                </div>
                                                    <div>
                                                        <div><span className="product-order-review-single-header">color:</span> <span className="product-property-content">black</span></div>
                                                        <div><span className="product-order-review-single-header">Belt Length:</span> <span className="product-property-content">120cm</span></div>
                                                    </div>
                                                    <div className="product-order-review-single-price">US $1.57</div>
                                                    <div>Estimated Delivery Time:31-52 Days</div>
                                                </Col>
                                                <Col md={3}>3 of 3</Col>
                                            </Row>
                                        </div>
                                        <hr></hr>
                                        <Row>
                                            <Col md={6}></Col>
                                            <Col md={6}>
                                                <Row>
                                                    <Col md={6}>
                                                        Subtotal
                                                    </Col>
                                                    <Col md={6} className="product-order-review-summery-price">
                                                        US $1.57
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={6}>
                                                        Shipping
                                                    </Col>
                                                    <Col md={6} className="product-order-review-summery-price">
                                                        US $1.57
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={6}>
                                                        Total
                                                    </Col>
                                                    <Col md={6} className="product-order-review-summery-price">
                                                        US $1.57
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col md={{ span: 4 }} className="space-down">
                        <Row>
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
                        </Row>
                    </Col>

                </Row>
            </div>
        )
    }
}