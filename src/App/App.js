import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WishList from '../wishList/wishList';

import HttpService from '../service/http-service';
import Product from '../product/product';


const http = new HttpService();

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {products:[]};
       this.loadData = this.loadData.bind(this);
        this.productList = this.productList.bind(this);
        this.loadData();
        
    }
    
    loadData = () => {
        var self = this;
        http.getProducts().then(data => {
            //console.log(products);
            self.setState({products: data});
          
        }, err => {
            
            
        }) ;
        
    }
    
    productList = () => {
        
        const list = this.state.products.map((product) => 
            
            <div className="col-sm-4" key={product._id}>
            
            <product product={product}/>
            
            </div>
        
        );
        return (list);
        
    }
     render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Swag Shop</h1>
        </div>
        <div className="container-fluid App-main">
        <div className="row">
            
            <div className="col-sm-8">
                <div className="row">
            {this.productList()}
            </div></div>
            <div className="col-sm-4">
            
            <wishList />
            </div>
            {this.productList()}

        <product price="4.23" class="col-sm-4" title="cool  Toy Gun" imgUrl="http://americanlookout.com/wp-content/uploads/2017/05/54ca62c3d99f0_-_waterguns-5.jpg"/>
            <product price="4.23" class="col-sm-4" title="cool  Toy Gun" imgUrl="http://americanlookout.com/wp-content/uploads/2017/05/54ca62c3d99f0_-_waterguns-5.jpg"/>
            <product price="4.23" class="col-sm-4" title="cool  Toy Gun" imgUrl="http://americanlookout.com/wp-content/uploads/2017/05/54ca62c3d99f0_-_waterguns-5.jpg"/>
        </div>
               </div> 
        </div>
    );
  }
}
export default App;
