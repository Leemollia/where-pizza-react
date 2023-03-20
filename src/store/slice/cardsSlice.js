import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
        status: null,
        error: null,
    },
    reducers: {
        showChooseModal(state, action) {
        }
    },
    extraReducers: (builder) => {

    }
})

export const { showChooseModal } = cardsSlice.actions;

export default cardsSlice.reducer;