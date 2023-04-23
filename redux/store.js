import { combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/profile'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import categoryReduce from '../pages/category/categoryReduce';
const homeConfig = {
    key: 'homeSlide',
    storage,
  };


const reducers = combineReducers({
   // counter: counterReducer
   category : categoryReduce

});


const persistedReducer = persistReducer(homeConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})