import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import RadioBlockStyles from './RadioBlock.module.css';

export default class RadioBlock extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contentList: this.props.contentList,
            name: this.props.name,
            inline: this.props.inline || false,
        };
    }

    render() {
        let _this = this;

        return (
            <div className="radio-block">
                <div className="radio-content">
                    {
                        this.state.contentList.map(function (contentPayload, contentIndex) {
                            return (
                                <span>
                                    <input className={RadioBlockStyles.radio} id={_this.state.name + contentIndex} type="radio" name={_this.state.name} />
                                    <label className={RadioBlockStyles.label} for={_this.state.name + contentIndex}>
                                        <Row>
                                            <Col md={2}>
                                                <span className={RadioBlockStyles.span}></span>
                                            </Col>
                                            <Col md={10}>
                                                {contentPayload.content.map(function (itemContent, itemContentIndex) {
                                                    return <div className={RadioBlockStyles.labelContent}>{itemContent}</div>
                                                })}
                                            </Col>
                                        </Row>
                                    </label>
                                    {contentIndex == _this.state.contentList.length - 1 || _this.state.inline == true ? null : <br></br>}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}