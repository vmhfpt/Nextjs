import axiosClient from '../handle';

const CategoryApi = {
  getListAll : (data) => {
    const url = '/category';
    return axiosClient.get(url);
  },
  create : (data) => {
    const url = '/category';
    return axiosClient.post(url, data );
   },
   getOne : (id) => {
    const url = '/category?type=one&id='+ id;
    return axiosClient.get(url);
   },
   update : (data) => {
    const url = '/category' ;
    return axiosClient.put(url, data);
   },
   delete : (data) => {
  
    const url = '/category' ;
    return axiosClient.delete(url,
      { 
      data: {
          id: data
      }
  });
   },
  }
  
  export default CategoryApi; 
