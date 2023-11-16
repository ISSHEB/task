import { createSlice } from '@reduxjs/toolkit';

const initialState = []
// {
//     // "_id": "",
//     // "index": 0,
//     // "picture": "",
//     // "age": 38,
//     // "name": "",
//     // "email": "",
//     // "phone": "",
//     // "about": "",
// };

const CardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        setCardSlice: (state, action) => {
            state = [...state, action.payload];
        },
    },
});

export const { setCardSlice } = CardSlice.actions;
export default CardSlice.reducer;