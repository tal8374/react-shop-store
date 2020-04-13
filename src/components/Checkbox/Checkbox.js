import React, { Component } from 'react';
import checkbox from './checkbox.module.css';

export default class Checkbox extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            id: props.id,
            label: props.label
        };
    }

    render() {
        return (
            <form >
                <input  className={checkbox.checkbox} type="checkbox" id={this.state.id} name={this.state.id} value={this.state.id}></input>
                {<label className={checkbox.label} for={this.state.id}>{this.state.label == null ? '' : this.state.label}</label>}
            </form>
        )
    }
}