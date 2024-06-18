import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/userReducer';
import dataReducer from './reducer/dataReducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
        data: dataReducer,
    },
});
