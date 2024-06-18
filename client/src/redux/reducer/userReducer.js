import { SET_ERROR, SET_IS_LOADING, SET_USER } from '../types/types';

const initialState = {
    isFetching: false,
    token: null,
    error: null,
};
export default function userReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_USER:
            return { ...state, token: payload };
        case SET_ERROR:
            return { ...state, error: payload };
        case SET_IS_LOADING:
            return { ...state, isFetching: payload };
        default:
            return state;
    }
}
