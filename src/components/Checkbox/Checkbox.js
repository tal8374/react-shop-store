import React, { Component } from 'react';
import CheckboxStyle from './Checkbox.module.css';

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
                <input  className={CheckboxStyle.checkbox} type="checkbox" id={this.state.id} name={this.state.id} value={this.state.id}></input>
                {<label className={CheckboxStyle.label} for={this.state.id}>{this.state.label == null ? '' : this.state.label}</label>}
            </form>
        )
    }
}