import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null
    },
    reducers: {
        addUser: (state, action) => {
            // console.log(action.payload);
            
            (state.user = action.payload.user);
            (state.token = action.payload.token);
            Cookies.set("user",JSON.stringify(state.user)),
            Cookies.set("token",(state.token))
        },
        removeUser: (state) =>{
            state.user =null,
            state.token=null
            Cookies.remove("user")
            Cookies.remove("token")
        },
    },
})

export const { addUser,removeUser } = authSlice.actions;
export default authSlice.reducer;