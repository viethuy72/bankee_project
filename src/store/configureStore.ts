import {configureStore} from '@reduxjs/toolkit';

import {createReducer} from './reducers';

function configureAppStore() {
    return configureStore({
        reducer: createReducer(),
    });
}

const store = configureAppStore()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

