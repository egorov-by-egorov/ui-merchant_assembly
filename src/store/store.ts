import { postApi } from '#api/PostAPI';
import UserReducer from '#store/reducers/UserSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers( {
    UserReducer,
    [ postApi.reducerPath ]: postApi.reducer,
} );

export const setupStore = () => {
    return configureStore( {
        reducer: rootReducer,
        middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( postApi.middleware ),
    } );
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
