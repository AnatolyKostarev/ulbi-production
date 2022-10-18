import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReduser: ReducersMapObject<StateSchema> = {
        user: userReducer,
        counter: counterReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReduser,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
