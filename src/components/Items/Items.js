import React, { Component } from 'react';
import { CardGroup, Row, Col } from 'react-bootstrap';
import Item from '../Item/Item';
import ItemsStyle from './Items.module.css';

export default class Items extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            id: props.id,
            label: props.label
        };
    }

    render() {
        return (
            <CardGroup>
                <div className={ItemsStyle.cardGroupContainer}>
                    <Row className={ItemsStyle.itemsRow}>
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
                    <Row className={ItemsStyle.itemsRow}>
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