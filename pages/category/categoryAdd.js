import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { getListCategory } from "./categorySelect";
import { useEffect , useState} from "react";
import { getList } from "./categoryReduce";
import { create } from "./categoryReduce";
import CategoryService from "../../service/category.service";
import isEmpty from "is-empty";
import { addCategory } from "./categoryReduce";
export default function AddCategory() {
  
    const [status, setStatus] = useState({});
    const dispatch = useDispatch();
    const dataCategory = useSelector(getListCategory);
    useEffect(() => {
     
        dispatch(getList({type : 'getAll'}));
        
    }, []);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
      

      if(data.category == 'null'){
        data = {...data, category : null};
      }
      const result = await CategoryService.create(data);
      if(result.status == 'success'){
        setStatus({
           status : 'success',
           message : "Add " + result.data.name + ' success' 
        });
        setValue('name', '');
        dispatch(addCategory(result.data));
      }else {
        setStatus({
          status : 'error',
          message : result.message
       });
      }
      //setValue('name', '');
     // dispatch(create(data ));
    }
    return (
      <>
      
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

      <h2> Add category</h2>
    
      <form className="container-form" onSubmit={handleSubmit(onSubmit)}>
      { !isEmpty(status) ? <span className={status.status == 'error' ? "popup-error": "popup-success"} > {status.message}</span>: ''}
      <input placeholder="Enter name ..." {...register("name", { required: true , pattern: /^([a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{4,20})$/i })} />

      {errors.name?.type === 'required' && <span className="error" >* Name is required </span>}
      {errors.name?.type === 'pattern' && <span className="error" >* Name is invalid </span>}


      <select {...register("category")}>
      <option value="null" > Parent category</option>
        {dataCategory.map((item, key) => (
            <option value={item._id} key={key}> {item.name}</option>
        ))}
      </select>
      <input type="submit" />
    </form>
      
      
      
      </>
    );
}