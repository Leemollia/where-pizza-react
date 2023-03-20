import { configureStore } from '@reduxjs/toolkit';

import { cardsApi } from './api/cardsApi.js';
import cardsSlice from './slice/cardsSlice.js';
import modalCardSlice from './slice/modalCardSlice.js';

export const store = configureStore({
    reducer: {
        cards: cardsSlice,
        modalCard: modalCardSlice,
        [cardsApi.reducerPath]: cardsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(cardsApi.middleware)
    }
})