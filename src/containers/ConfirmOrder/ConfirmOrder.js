import React, { Component } from 'react';
import { Accordion, Card, Row, Col } from 'react-bootstrap';
import './ConfirmOrder.css';
import OrderSummery from '../../components/OrderSummery/OrderSummery';
import StoreItems from '../../components/StoreItems/StoreItems';
import RadioBlock from '../../components/RadioBlock/RadioBlock';

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
                                        <RadioBlock
                                            contentList={[
                                                {
                                                    content: ['name, phone', 'street', 'city, country'],
                                                    id: 1
                                                },
                                                {
                                                    content: ['name, phone', 'street', 'city, country'],
                                                    id: 2
                                                },
                                                {
                                                    content: ['name, phone', 'street', 'city, country'],
                                                    id: 3
                                                }
                                            ]}
                                            name={"shippingInformation"}                                            
                                        >
                                        </RadioBlock>
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
                                    <RadioBlock
                                            contentList={[
                                                {
                                                    content: ['VISA **** 1234'],
                                                    id: 4
                                                },
                                                {
                                                    content: ['VISA **** 1234'],
                                                    id: 5
                                                },
                                                {
                                                    content: ['VISA **** 1234'],
                                                    id: 6
                                                }
                                            ]}
                                            name={"visa"}                                        
                                        >
                                        </RadioBlock>
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