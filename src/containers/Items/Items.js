import React, { Component } from 'react';
import Item from '../../components/Item/Item';
import { CardGroup, Row, Col } from 'react-bootstrap';
import itemsStyle from './Items.module.css';

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
                <div className={itemsStyle.cardGroupContainer}>
                    <Row className={itemsStyle.itemsRow}>
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
                    <Row className={itemsStyle.itemsRow}>
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