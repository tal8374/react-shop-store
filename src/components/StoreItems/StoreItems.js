import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Checkbox from '../Checkbox/Checkbox';
import CounterButtons from '../../components/CounterButtons/CounterButtons';
import StoreItemsStyle from './StoreItems.module.css';

export default class StoreItems extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>Tal 777 Store</Card.Header>
                    <Card.Body>
                        <Row>
                            <Checkbox id="1"></Checkbox>
                            <Card.Title>Item #1</Card.Title>
                        </Row>
                        <Card.Text>
                            <Row>
                                <Col md={3}>
                                    <img className={StoreItemsStyle.image} src="https://images-na.ssl-images-amazon.com/images/I/51nspdPkIdL._AC_UL260_SR200,260_.jpg"></img>
                                </Col>
                                <Col md={6}>
                                    <div>
                                        Men's Bark texture automatic buckle Belt young people black simple buckle highgrade luxury Business belt Ceinture Homme 3.5cmp56
                                                </div>
                                    <div>
                                        <div><span className={StoreItemsStyle.header}>color:</span> <span className={StoreItemsStyle.content}>black</span></div>
                                        <div><span className={StoreItemsStyle.header}>Belt Length:</span> <span className={StoreItemsStyle.content}>120cm</span></div>
                                    </div>
                                    <div className={StoreItemsStyle.singlePrice}>US $1.57</div>
                                    <div>Estimated Delivery Time:31-52 Days</div>
                                </Col>
                                <Col md={3}>
                                    <CounterButtons></CounterButtons>
                                </Col>
                            </Row>
                        </Card.Text>
                        <hr />
                        <Row>
                            <Checkbox id="2"></Checkbox>
                            <Card.Title>Item #2</Card.Title>
                        </Row>
                        <Card.Text>
                            <Row>
                                <Col md={3}>
                                    <img className={StoreItemsStyle.image} src="https://images-na.ssl-images-amazon.com/images/I/51nspdPkIdL._AC_UL260_SR200,260_.jpg"></img>
                                </Col>
                                <Col md={6}>
                                    <div>
                                        Men's Bark texture automatic buckle Belt young people black simple buckle highgrade luxury Business belt     Ceinture Homme 3.5cmp56
                                                </div>
                                    <div>
                                        <div><span className={StoreItemsStyle.header}>color:</span> <span className={StoreItemsStyle.content}>black</span></div>
                                        <div><span className={StoreItemsStyle.header}>Belt Length:</span> <span className={StoreItemsStyle.content}>120cm</span></div>
                                    </div>
                                    <div className={StoreItemsStyle.singlePrice}>US $1.57</div>
                                    <div>Estimated Delivery Time:31-52 Days</div>
                                </Col>
                                <Col md={3}>
                                    <CounterButtons></CounterButtons>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>sanhe 888 Store</Card.Header>
                    <Card.Body>
                        <Row>
                            <Checkbox id="3"></Checkbox>
                            <Card.Title>Item #1</Card.Title>
                        </Row>
                        <Card.Text>
                            <Row>
                                <Col md={3}>
                                    <img className={StoreItemsStyle.image} src="https://images-na.ssl-images-amazon.com/images/I/51nspdPkIdL._AC_UL260_SR200,260_.jpg"></img>
                                </Col>
                                <Col md={6}>
                                    <div>
                                        Men's Bark texture automatic buckle Belt young people black simple buckle highgrade luxury Business belt Ceinture Homme 3.5cmp56
                                                </div>
                                    <div>
                                        <div><span className={StoreItemsStyle.header}>color:</span> <span className={StoreItemsStyle.content}>black</span></div>
                                        <div><span className={StoreItemsStyle.header}>Belt Length:</span> <span className={StoreItemsStyle.content}>120cm</span></div>
                                    </div>
                                    <div className={StoreItemsStyle.singlePrice}>US $1.57</div>
                                    <div>Estimated Delivery Time:31-52 Days</div>
                                </Col>
                                <Col md={3}>
                                    <CounterButtons></CounterButtons>
                                </Col>
                            </Row>
                        </Card.Text>
                        <hr />
                        <Row>
                            <Checkbox id="4"></Checkbox>
                            <Card.Title>Item #2</Card.Title>
                        </Row>
                        <Card.Text>
                            <Row>
                                <Col md={3}>
                                    <img className={StoreItemsStyle.image} src="https://images-na.ssl-images-amazon.com/images/I/51nspdPkIdL._AC_UL260_SR200,260_.jpg"></img>
                                </Col>
                                <Col md={6}>
                                    <div>
                                        Men's Bark texture automatic buckle Belt young people black simple buckle highgrade luxury Business belt Ceinture Homme 3.5cmp56
                                                </div>
                                    <div>
                                        <div><span className={StoreItemsStyle.header}>color:</span> <span className={StoreItemsStyle.content}>black</span></div>
                                        <div><span className={StoreItemsStyle.header}>Belt Length:</span> <span className={StoreItemsStyle.content}>120cm</span></div>
                                    </div>
                                    <div className={StoreItemsStyle.singlePrice}>US $1.57</div>
                                    <div>Estimated Delivery Time:31-52 Days</div>
                                </Col>
                                <Col md={3}>
                                    <CounterButtons></CounterButtons>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}