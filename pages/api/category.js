import db from '../../database/connection';
import isEmpty from 'is-empty';
db.connect();

import CategoryController from '../../Controller/CategoryController';
//import Category from '../../Models/Category';
export default function handler(req, res) {
   
    const {method} = req;
    switch(method){
       case "GET": {
        const {query} = req;
        
        if(!isEmpty(query)){
           // res.status(200).json({status: "get one", method : "GET", data : query});
            return (CategoryController.show(req, res));
        }else {
           
           return (CategoryController.index(req, res));
        }

       }
       case "POST": {
        return (CategoryController.create(req, res));
           break;
       }
       case "DELETE": {
        return (CategoryController.destroy(req, res));
           break;
       }
       case "PUT": {
        return (CategoryController.update(req, res));
      //  console.log(req.body);
          // res.status(200).json({status: "success", method : "PUT"});
           break;
       }
       default : {
           res.status(200).json({status: "success", method : "underfine"});
       }
    }
}
  