import {combineReducers} from "redux";

import { wishReducer } from "./wishReducer";

export const rootReducer = combineReducers({
    wishReducer: wishReducer,
});
