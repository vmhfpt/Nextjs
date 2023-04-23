
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getList } from "./categoryReduce";
import { getListCategory } from "./categorySelect";
import { deletes } from './categoryReduce';
import Link from 'next/link'
export default function Category() {
    const dataItem = useSelector(getListCategory)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getList({type : 'getAll'}));
    }, []);
    const handleDelete = (id) => {
      dispatch(deletes(id));
    }
    return (<>
        <style jsx>{`
       table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      
      tr:nth-child(even) {
        background-color: #dddddd;
      }
      .container-fluid-table {
            display: flex;
            justify-content: center;
            align-items: center;
            width : 100%;
        
      }
      .container-table {
        width: 50%;
      }
      `}</style>

        <div className="container-fluid-table">
            <div className="container-table" >
                <table>
                   <tbody>
                   <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th></th>
                        <th></th>
                    </tr>

                    {dataItem.map((item, key) => (
                         <tr key={key}>
                         <td>#{key+1}</td>
                         <td>{item.name}</td>
                         <td>{item.parent_id ? item.parent_id.name : '--Top--' }</td>
                         <td><Link href={"edit/" + item._id}><button >Edit</button></Link></td>
                         <td><button onClick={() => handleDelete(item._id)}>Delete</button></td>
                     </tr>
                    ))}
                   
                   </tbody>
                   
                </table>
            </div>
        </div>

    </>);
}