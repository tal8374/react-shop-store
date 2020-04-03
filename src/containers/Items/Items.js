import React, { Component } from 'react';
import Item from '../../components/Item/Item';
import { CardGroup, Container, Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import './items.css';

export default class Items extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {

        return (
            <CardGroup>
                <div class="card-group-container">
                    <Row className="items-row">
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Item></Item>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Item></Item>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Item></Item>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Item></Item>
                        </Col>
                    </Row>
                    <Row className='items-row'>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Item></Item>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Item></Item>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Item></Item>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Item></Item>
                        </Col>
                    </Row>
                </div>
            </CardGroup>
        )
    }
}