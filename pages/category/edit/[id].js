import { useForm } from "react-hook-form";
import isEmpty from "is-empty";
import { useRouter } from 'next/router';
import { useEffect, useState} from 'react';
import { getListCategory } from '../categorySelect';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../categoryReduce';
import CategoryService from '../../../service/category.service';
export default function Edit({category}){
  //console.log(category)
  const [status, setStatus] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getList());
  }, []);
  const listCategory = useSelector(getListCategory);



  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    

    if(data.category == 'null'){
      data = {...data, category : null};
    }
    data = {...data, id : category._id}
    const dataUpdate = await CategoryService.update(data);
    if(dataUpdate.status == 'success'){
        setStatus(dataUpdate);
     
      }else {
        setStatus(dataUpdate);
      }
    // const result = await CategoryService.create(data);
    // if(result.status == 'success'){
    //   setStatus({
    //      status : 'success',
    //      message : "Add " + result.data.name + ' success' 
    //   });
    //   setValue('name', '');
    //   dispatch(addCategory(result.data));
    // }else {
    //   setStatus({
    //     status : 'error',
    //     message : result.message
    //  });
    // }
    //setValue('name', '');
   // dispatch(create(data ));
  }
  //console.log(listCategory)
  
 
    return (<>
        <style jsx>{`
        .container-form {
            padding :0px 20px;
            width : 410px;
            display : flex;
            flex-direction : column;
            gap : 14px;
        }
        .popup-error {
          background : red;
          width : 100%;
          padding : 10px 10px;
          color : white;
        }
        .popup-success {
          width : 100%;
          padding : 10px 10px;
          background : green;
          color : white;
        }
        .error {
            color : red;
        }
        input:focus {
            outline : none;
        }
        select:focus {
            outline : none;
        }
        .container-form input {
            padding : 10px 10px;
            font-size : 14px;
            border : 1px solid #eee;
        }
        .container-form select {
            padding : 10px 10px;
            font-size : 14px;
            border : 1px solid #eee;
        }
      `}</style>

      <h2> Edit category "{category.name}"</h2>
    
      <form className="container-form" onSubmit={handleSubmit(onSubmit)}>
      { !isEmpty(status) ? <span className={status.status == 'error' ? "popup-error": "popup-success"} > {status.message}</span>: ''}
      <input  defaultValue={category.name} placeholder="Enter name ..." {...register("name", { required: true , pattern: /^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{4,20})$/i })} />

      {errors.name?.type === 'required' && <span className="error" >* Name is required </span>}
      {errors.name?.type === 'pattern' && <span className="error" >* Name is invalid </span>}


      <select defaultValue={category.parent_id ? category.parent_id._id : "null"} {...register("category")}>
      <option value="null"> Parent category</option>
        {listCategory.map((item, key) => (
            <option value={item._id} key={key}> {item.name}</option>
        ))}
      </select>
      <input type="submit" />
    </form>
    </>) ;
}

export async function getStaticPaths() {

   const dataItem = await CategoryService.index();
   const paths = dataItem.data.map((item, key) => ({
          params : { id : item._id.toString()}
    }));
   
  return {
      paths,
      fallback: false, // can also be true or 'blocking'
  }
}


export async function getStaticProps({params}) {
  
  const dataItem = await CategoryService.getOne(params.id);
  return {
    props: {
      category : dataItem.data
    },
  }
}