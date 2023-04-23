import Category from "../Models/Category";

class CategoryController {
  update(req, res) {
   
    //http://localhost:3000/admin/category/update/slug method PUT request data body
    Category.findOne({ _id: req.body.id }).then((data) => {
      if (!data) return res.json({ status: "Not Found Item" });
  
   
      Promise.all([
        Category.findByIdAndUpdate(data.parent_id, {
          $pull: { category_child: data._id },
        }),
        Category.findOneAndUpdate(
          { _id: req.body.id },
          {
            name: req.body.name,
            parent_id: req.body.category
          }
        ),
        req.body.category
          ? Category.findByIdAndUpdate(
              req.body.category,
              { $push: { category_child: data._id } },
              { new: true, useFindAndModify: false }
            )
          : null,
      ]).then(([dataItem, dataItem2, dataItem3]) => {
        return res.json({ status : "success",  message : "update " + req.body.name + " success"  });
      })
      .catch((error) => {
        return res.json({ status: "error", message : req.body.name + " registed" });
      })
    });
  }
  index(req, res) {
     Category.find({})
     .populate({ select: '-_id -parent_id -category_child -createdAt -updatedAt', path: 'parent_id', model: Category })
     .then((data) => {
            return res.status(200).json({'status' : 'success', data});
          }).catch((error) => {
            return res.status(200).json(error);
          })
   
  }
 async destroy(req, res) {
     await Promise.all([
      Category.findById(req.body.id),
      Category.findByIdAndRemove(req.body.id),
    ]).then(([data, dataDelete]) => {
      return Category.findByIdAndUpdate(dataDelete.parent_id, {
        $pull: { category_child: dataDelete._id },
      }).then((dataUpdate) => {
           return res.json({status : "success", id : dataDelete._id});
      });
    }); 
  }
  create(req, res) {
   

    Category.create({
      name : req.body.name,
      parent_id : req.body.category
    }).then((data) => {
      Category.findByIdAndUpdate(
        data.parent_id,
        { $push: { category_child: data._id } },
        { new: true, useFindAndModify: false }
      ).then((dataItem) => {
        return res.json({status : 'success', data});
      });
    })
    .catch((error) => {
      return res.json({status : 'error', message : req.body.name + ' registed'});
    })
  }
  show(req, res){
  
   Category.findOne({ _id : req.query.id })
   .populate({ select: '-parent_id -category_child -createdAt -updatedAt', path: 'parent_id', model: Category })
   .then((data) => {
    return res.status(200).json({'status' : 'success', data});
   })
   .catch((error) => {
      return res.status(200).json(error);
   })
  }
}
export default new CategoryController();