import React, { Component } from 'react';
import CounterButtonsStyle from './CounterButtons.module.css';

export default class Checkbox extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className={CounterButtonsStyle.number}>
                <span className={CounterButtonsStyle.minus}>-</span>
                        3
                <span className={CounterButtonsStyle.plus}>+</span>
            </div>
        )
    }
}