import {ADD_WISH_TO_LIST} from "../actionTypes";

export const addWish = (wishObj) => {
    return {
        type: ADD_WISH_TO_LIST,
        payload: wishObj
    };
};