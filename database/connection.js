import mongoose from 'mongoose';
async function connect(){
    try {
        await mongoose.connect('mongodb+srv://ak47016599:tctk19tdptcxlddm@cluster0.tq8jxdo.mongodb.net/next?retryWrites=true&w=majority');
        console.log('connect database success !');
    } catch {
        console.log('connect database error !');
    }
}
export default {connect};