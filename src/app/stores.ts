import CounterReducer from "@/features/coounter/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})


export type RootState  = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch



/**
 * 
 * create baseApi in the baseApi.ts from rtk query doc
 * query dui vage bivogto crud operationer redux er vashay. 1. query, 2. mutation
 * 1.query only get | 2. mutation is post, update, delete
 * 
 * query korle obje hisebe data pete hoy. such as: const {data} = useGetBook()
 * mutation korle array hisebe data dite hoy. such as: const [result, {data, isLoading, isError}] = useGetBook()
 */