import 'whatwg-fetch';

class HttpService {
    //var getProducts = function(){} is sam e as below(is ES6)
    getProducts = () => {
        //1
        var promise = new Promise((resolve, reject) => {
          //2  
          fetch('http://localhost:3004/product')
        .then(response => {
//          console.log(response.json());
             //4 
              resolve(response.json());
          
          
      })   
        });
     //3
        return promise;
    }
    
}

export default HttpService;