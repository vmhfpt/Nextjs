import CategoryApi from "../api/category/categoryApi";
class CategoryService {
   async index(data){
       return await CategoryApi.getListAll(data);
    }
    async create(data){
        return await CategoryApi.create(data);
     }
    async getOne(id){
      return await CategoryApi.getOne(id);
    }
    async update(data) {
      return await CategoryApi.update(data);
    }
    async delete(data) {
      return await CategoryApi.delete(data);
    }
}
export default new CategoryService();