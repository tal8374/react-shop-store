import React, { Component } from 'react';
import { Jumbotron, Container, ButtonGroup, ButtonToolbar, Button, Accordion, Card, Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import './ShoppingCart.css';
import OrderSummery from '../../components/OrderSummery/OrderSummery';
import StoreItems from '../../components/StoreItems/StoreItems';
import Checkbox from '../../components/Checkbox/Checkbox';

export default class ShoppingCart extends Component {
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
                        <Jumbotron fluid>
                            <Container>
                                <h1>Shopping Cart (26)</h1>
                                <Checkbox id="all" label="Select All"></Checkbox>
                            </Container>
                        </Jumbotron>
                        <StoreItems></StoreItems>
                    </Col>
                    <Col md={{ span: 4 }} className="space-down">
                        <Row>
                            <OrderSummery></OrderSummery>
                        </Row>
                    </Col>

                </Row>
            </div >
        )
    }
}