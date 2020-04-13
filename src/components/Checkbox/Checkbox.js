import React, { Component } from 'react';
import './Checkbox.css';

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
            <form className="checkbox-form">
                <input className="checkbox-form" type="checkbox" id={this.state.id} name={this.state.id} value={this.state.id}></input>
                {<label className="checkbox-form" for={this.state.id}>{this.state.label == null ? '' : this.state.label}</label>}
            </form>
        )
    }
}