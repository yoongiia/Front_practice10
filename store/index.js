import {configureStore} from '@reduxjs/toolkit';
import logoReducer from '../store/logoSlice';
import menuReducer from '../store/menuSlice';
import dateReducer from '../store/dateSlice';

const store = configureStore({
    reducer: {
        logo: logoReducer,
        menu: menuReducer,
        date: dateReducer,
    }
  });
  
  export default store;