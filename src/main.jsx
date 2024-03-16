import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';

import { configureStore} from '@reduxjs/toolkit';
import productReducer, { productsFetch } from './assets/reducer/productSlice.jsx';


const store=configureStore({
    reducer:{
        products:productReducer,
    },
})
console.log(store.dispatch(productsFetch())
)

store.subscribe(()=>{
    console.log(store.getState())
})
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
            <App />
    </Provider>
);
