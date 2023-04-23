
import {model, models, Schema} from 'mongoose';


const CategorySchema = new Schema({
  name : {
    type : String,
    unique: true
  },
  parent_id : {
    type: Schema.Types.ObjectId,
    ref: "Category",
    default: null
  },
  category_child : [{ type: Schema.Types.ObjectId, ref: 'Category', default: undefined }],
},
{ timestamps : true}
);
let Category = models.category || model('category', CategorySchema)

export default  Category;



