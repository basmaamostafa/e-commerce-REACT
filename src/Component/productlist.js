import React, { Component } from 'react';
import {Productemp} from './Productemp';

export class ProductList extends Component {
    state = {         
        show:false,
    };
    render() { 
        return ( 
            <div>
            <h1>Products</h1>
            <div className="products">
            {this.props.productdata.map((product) => (
                <Productemp product={product}
                addclick={this.props.addclick}
                show={this.state.show}
                />
            ))}
            </div>
            </div>
         );
    }
}
 
