import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    items:[],
    status:null
}

export const productsFetch=createAsyncThunk(
    "products/productsFetch",
   
        async (page,{rejectWithValue})=>{
        try{
            const {data}= await axios.get("https://jsonplaceholder.typicode.com/todos/")
            console.log(data);
            return data;
            
          }
        catch(error){
        return rejectWithValue(error.message);
        }
    })

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducer:{
        [productsFetch.pending]:(state,action)=>{
            console.log("pending");
            state.status="pending"
        },
        [productsFetch.fulfilled]:(state,action)=>{
            console.log("fulfilled");
            state.status="fulfilled";
            console.log(action.payload)
            state.items=action.payload;
        },
        [productsFetch.rejected]:(state,action)=>{
            console.log("rejected");
            state.status="rejected"; 
        },
  
    }

})

export default productSlice.reducer;