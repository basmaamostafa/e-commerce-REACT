import React from 'react';
import products from '../Data/products.json';
import {ProductList} from './productlist';
import {Cart} from './cart'
export class Home extends React.Component {
    state={
        item:0,
    };
    additem = () => {
        this.setState({
            item: this.state.item +1
        });
    };
    
    render() { 
        return (
            <div className='home'>
                <div  className='title'>
                <h1>Products</h1>
                    <Cart item={this.state.item}  />
                </div>
                <ProductList productdata={products}
                    addclick={this.additem} />
            </div>
        );
    }
}
 
export default Home;