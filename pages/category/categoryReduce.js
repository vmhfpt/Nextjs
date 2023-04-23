import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import CategoryService from "../../service/category.service";
const initialState = {
    category : [],
    item : {}
};
export const categorySlice = createSlice({
    name : 'categoryReducer',
    initialState,
    reducers : {
        setCategory : (state, action) => {
             state.category = action.payload;
        },
        setItemCategory : (state, action) => {
           console.log(action.payload)

        },
        addCategory : (state, action) => {
            state.category.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getList.fulfilled, (state, action) => {
             state.category = action.payload.data;
          }) 
          .addCase(create.fulfilled, (state, action) => {
            state.category.push(action.payload.data);
         })
         .addCase(deletes.fulfilled, (state, action) => {
            let dataItem = state.category;
            state.category = dataItem.filter(
                (item) => item._id !== action.payload.id
              );
            
         });
         
    },
});
export const getList = createAsyncThunk('category/list', async (data) => {
    const response = await CategoryService.index(data);
     return response;
});
export const create = createAsyncThunk('category/create', async (data) => {
    const response = await CategoryService.create(data);
     return response;
});
export const deletes = createAsyncThunk('category/delete', async (data) => {
    const response = await CategoryService.delete(data);
     return response;
});

export const { setCategory, setItemCategory , addCategory} = categorySlice.actions;
  
export default categorySlice.reducer;
