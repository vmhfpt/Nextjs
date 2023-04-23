import db from '../../database/connection';
db.connect();



import Category from '../../Models/Category';


export default function handler(req, res) {

    // Category.create(
    //     {
    //         name : 'Iphone', parent_id : null,
    //         category_child : []
    //     }
    //   ).then((data) => {
    //     return res.status(200).json({'status' : 'success', data});
    //   }).catch((error) => {
    //     return res.status(200).json(error);
    //   })

    Category.find({})
    .populate('parent_id', '-_id -parent_id -category_child -createdAt -updatedAt')
    .then((data) => {
      return res.status(200).json(data);
    })
    
  }
  