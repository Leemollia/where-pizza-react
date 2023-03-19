import { configureStore } from '@reduxjs/toolkit';

import { cardsApi } from './api/cardsApi.js';
import cardsSlice from './slice/cardsSlice.js';

export const store = configureStore({
    reducer: {
        cards: cardsSlice,
        [cardsApi.reducerPath]: cardsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(cardsApi.middleware)
    }
})