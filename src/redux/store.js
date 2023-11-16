import { configureStore } from '@reduxjs/toolkit';
import CardSlice  from './Slice/CardSlice'

export const makeStore = configureStore({
    reducer: {
        CardSlice
    },
});

export const store = makeStore;



export default store;
