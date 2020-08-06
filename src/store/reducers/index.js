import {combineReducers} from "redux";

import { wishReducer } from "./wishReducer";
// Don't need to combine reducers here, since I only have one. Might use it though if I wanted to develop this feature further.
export const rootReducer = combineReducers({
    wishReducer: wishReducer,
});
