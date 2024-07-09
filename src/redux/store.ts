import { configureStore } from "@reduxjs/toolkit";
import TodoRedutures from "./features/TodoSlider";
import { baseApi } from "./api/Api";
export const store = configureStore({
    reducer:{
        [baseApi.reducerPath] : baseApi.reducer,
        todos: TodoRedutures
    },
    middleware: (getDefaultMiddleWares) => getDefaultMiddleWares().concat(baseApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch