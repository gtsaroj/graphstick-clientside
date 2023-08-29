import { configureStore, } from '@reduxjs/toolkit'
import CardReducer from './CardReducer'

export const store = configureStore({

    reducer: {
        cart: CardReducer
    },

})

