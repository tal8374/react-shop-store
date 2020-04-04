import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './RadioBlock.css';

export default class RadioBlock extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contentList: this.props.contentList,
            name: this.props.name,
        };
    }

    render() {
        let _this = this;

        return (
            <div class="radio-block">
                <div class="radio-content">
                    {
                        this.state.contentList.map(function (contentPayload, contentIndex) {
                            return (
                                <span>
                                    <input id={_this.state.name + contentIndex} type="radio" name={_this.state.name} />
                                    <label for={_this.state.name + contentIndex}>
                                        <Row>
                                            <Col md={2}>
                                                <span></span>
                                            </Col>
                                            <Col md={10}>
                                                {contentPayload.content.map(function (itemContent, itemContentIndex) {
                                                    return <div className="label-content">{itemContent}</div>
                                                })}
                                            </Col>
                                        </Row>
                                    </label>
                                    {contentIndex == _this.state.contentList.length - 1 ? null : <br></br>}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}