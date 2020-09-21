import React, { Component } from 'react';

export class Cart extends Component {
    render() { 
        return ( 
            <div className='cart'>
                <h3>Items : {this.props.item} </h3>
            </div>
         );
    }
}
 
