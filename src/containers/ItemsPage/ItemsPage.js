import React, { Component } from 'react';
import Items from '../../components/Items/Items';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent';

export default class ItemsPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
        };
    }

    render() {
        return (
            <div>
                <PaginationComponent
                    content={[
                        'All',
                        'Consumer Electronics',
                        'Fashion Accessories',
                        'Phones & Accessoriesin',
                        'Luggage & Bags',
                    ]}
                    size="lg"
                ></PaginationComponent>
                
                <Items></Items>

                <PaginationComponent
                    content={['0', '1', '2', '3', '4', '5', '6',]}
                    size="md"
                ></PaginationComponent>
            </div>
        )
    }
}