import { createSlice } from "@reduxjs/toolkit";


export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

export const counterSlice = createSlice({
name: 'counter',
initialState,
reducers:{
    increament: (state)=>{
        state.value = state.value + 1
    }
}

})


export const {increament} = counterSlice.actions;

export default counterSlice.reducer;