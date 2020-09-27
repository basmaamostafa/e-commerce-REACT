import React, { Component } from 'react';

export class Cart extends Component {
    render() { 
        return ( 
            <div>
                <button className='btn' >
                    Items : {this.props.item} 
                    </button>
            </div>
         );
    }
}
 
