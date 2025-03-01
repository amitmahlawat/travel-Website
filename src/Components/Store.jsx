import { createSlice,configureStore } from "@reduxjs/toolkit";
const loginState=localStorage.getItem('loginStatus')
// console.log(loginState)
const intialAuthState={loginStatus: loginState}
const authenticationSlice=createSlice({
    name:"authentication",
    initialState: intialAuthState,

    reducers:{
        Login(state,action){
            state.loginStatus=true
            localStorage.setItem("loginStatus",true)
            
            
        },
        Logout(state){
           
            state.loginStatus=false
            localStorage.setItem("loginStatus",false)
            
        }
    }
})

const initialInventory={Inventory :[]}
const InventorySlice =createSlice({
name:"Inventory",
initialState: initialInventory,
reducers:{
    updateInventory(state,action){
        state.Inventory=action.payload
    
    }
}
})


const store=configureStore({
    reducer:{authentication: authenticationSlice.reducer, Inventory: InventorySlice.reducer}
})

export const authenticationActions=authenticationSlice.actions
export const InventoryActions=InventorySlice.actions
export default store;