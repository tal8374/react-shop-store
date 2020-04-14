import React, { Component } from 'react';
import PaginationComponentStyle from './PaginationComponent.module.css';
import { Pagination } from 'react-bootstrap';

export default class PaginationComponent extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            id: props.id,
            size: props.size || 'md',
            content: props.content || []
        };
    }

    render() {
        return (
            <Pagination className={PaginationComponentStyle.pagination} size={this.state.size}>
                {this.state.content.map((text, i) => {
                    return <Pagination.Item className={PaginationComponentStyle.paginationItem} key={0} active={i == 0}>{text}</Pagination.Item>
                })}
            </Pagination>
        )
    }
}