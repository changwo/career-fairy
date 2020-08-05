import {sampleWishes} from "../../sampleData";
import {ADD_WISH_TO_LIST} from "../actionTypes";


const initialState = {
    wishes: sampleWishes,
};

export const wishReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case ADD_WISH_TO_LIST: {
            if (!newState.wishes) {
                return {...newState, wishes: [action.payload]};
            }
            return {
                ...newState,
                wishes: [action.payload, ...newState.wishes],
            };
        }
        default:
            return state;
    }
};
