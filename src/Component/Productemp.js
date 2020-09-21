import React, { Component } from 'react';

export class Productemp extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="product"> 
                {/* {JSON.stringify(product)}  */}
                <h3> {this.props.product.name} </h3>
                <h5> $ {this.props.product.price} </h5>
                {/* <p> {product.img} </p> */}
                <img className="img" src={this.props.product.img}></img>
                <button className='dec-btn' onClick={()=> this.setState({show:!this.state.show})}>  
                    {this.state.show ? 'Hide Descriprtion' : 'Show Description'}
                </button>
                    {this.state.show && (
                    <p className='des'> {this.props.product.des} </p>
                    )}
                <button className='btn' onClick={this.props.addclick}>Add to cart</button>
                </div>
         );
    }
}
 
