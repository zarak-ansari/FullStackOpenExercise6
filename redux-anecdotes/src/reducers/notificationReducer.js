import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name:'notification',
    initialState:null,
    reducers:{
        showNotification(state, action){
            return action.payload
        },
        hideNotification(state){
            return null
        }
    }
})

export default notificationSlice.reducer
export const { showNotification, hideNotification } = notificationSlice.actions