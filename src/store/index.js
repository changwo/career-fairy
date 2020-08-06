import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
// This middleware really isn't needed for this kind of project as I'm not making any async API calls
// Just threw it in hear in case I wanted to develop this feature more
const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
);

export const store = createStore(rootReducer, enhancer);
