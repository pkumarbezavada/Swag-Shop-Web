import React, {component} from 'react';
import './product-condensed.css';
import DataService from '../service/data-service';
let ds = new DataService();


class ProductCondensed extends component{
    
    constructor(props) {
        
        super(props);
        //Bind
        this.removeProduct = this.removeProduct.bind(this);
        
    }
    
    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }
    
    render() {
        return(
        <li className="list-group-item pc-condensed">
                <a className="btn btn-outline-danger" onClick={() => this.removeProduct()}>x</a>
                <p>{this.props.product.title} |<b> ${this.props.product.price} </b></p>
            
            
            
            </li>
        );
    }
    
    
}

export default ProductCondensed;