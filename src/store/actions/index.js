import {ADD_WISH_TO_LIST} from "../actionTypes";


// Only action needed for this feature atm
export const addWish = (wishObj) => {
    return {
        type: ADD_WISH_TO_LIST,
        payload: wishObj
    };
};