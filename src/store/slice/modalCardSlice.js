import { createSlice } from "@reduxjs/toolkit";

const cardModalSlice = createSlice({
    name: 'modalCard',
    initialState: {
        cardData: {},
        isOpen: false,
    },
    reducers: {
        showModal(state, action) {
            state.cardData = action.payload.cardData;
            state.isOpen = true;
        },

        hideModal(state, action) {
            state.cardData = {};
            state.isOpen = false;
        }
    },
    extraReducers: (builder) => {

    }
})

export const { showModal, hideModal } = cardModalSlice.actions;

export default cardModalSlice.reducer;