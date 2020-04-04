import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";

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
                        <Card.Title>Item #1</Card.Title>
                        <Card.Text>
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
                                <Col md={3}>
                                    <div class="number">
                                        <span class="minus">-</span>
	                                                3
	                                            <span class="plus">+</span>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Text>
                        <hr />
                        <Card.Title>Item #2</Card.Title>
                        <Card.Text>
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
                                <Col md={3}>
                                    <div class="number">
                                        <span class="minus">-</span>
	                                                3
	                                            <span class="plus">+</span>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>sanhe 888 Store</Card.Header>
                    <Card.Body>
                        <Card.Title>Item #1</Card.Title>
                        <Card.Text>
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
                                <Col md={3}>
                                    <div class="number">
                                        <span class="minus">-</span>
	                                                3
	                                            <span class="plus">+</span>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Text>
                        <hr />
                        <Card.Title>Item #2</Card.Title>
                        <Card.Text>
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
                                <Col md={3}>
                                    <div class="number">
                                        <span class="minus">-</span>
	                                                3
	                                <span class="plus">+</span>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}