import {combineReducers} from "redux";
import {commentReducer} from "./commentsReducer";


export const rootReducer = combineReducers({
    comments: commentReducer,
})

export type RootState = ReturnType<typeof rootReducer>