import React, {component} from 'react';
import './wishList.css';
import DataService from '../service/data-service'
import ProductCondensed from '../product-condensed/product-condensed';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from  '../service/notification';
let ns = new NotificationService();


class WishList extends component{
    
    
        
        constructor(props) {
            
            super(props);
            this.state = {WishList : [
//                {
//                    title:"Prasanna",
//                    price:23,
//                    _id:"wasfe23asfa"
//                    
//                },
//                {
//                    title:"Prasannas",
//                    price:233,
//                    _id:"wasfe23asfd"
//                    
//                },
//                {
//                    title:"Prasannass",
//                    price:2333,
//                    _id:"wasfe23asfg"
//                    
//                }
                
            ]};
            
            //bind functions
            
            this.createWishList = this.createWishList.bind(this);
            this.onWishListChanged = this.onWishListChanged.bind(this);
            
        }
    
    componentDidMount() {
        
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }
        
    
    componentWillUnmount() {
        ns.addObserver(this, NOTIF_WISHLIST_CHANGED);
    }
    
    onWishListChanged(newWishList) {
        this.setState({wishList: newWishList});
    }
    
    
        createWishList = () => {
            
            const list = this.state.wishList.map((product) => 
                                        
                  <productCondensed product={product} key={product._id} />                              
                                                
                                                );
            
        return (list);
        
        
    }
    
    
    
    render() {
        return(
        <div className="card">
            <div className="card-block">
                
                <h4 className="card-title"> Wish List</h4>
                
                <ul className="list-group">
                
                {this.createWishList()}
                
                
                
                </ul>
                </div>
            
            
            
            </div>
        );
    }
    
    
}


export default WishList;