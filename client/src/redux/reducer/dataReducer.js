import {
    ADD_DATA,
    DELETE_DATA,
    GET_DATA,
    PUT_DATA,
    SET_ERROR,
    SET_IS_LOADING,
} from '../types/types';

const initialState = {
    data: [],
    isLoading: true,
    error: null,
};
export default function dataReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_DATA:
            return { ...state, data: payload.data };
        case DELETE_DATA:
            return {
                ...state,
                data: state.data.filter((item) => item.id !== payload),
            };
        case ADD_DATA:
            return { ...state, data: [...state.data, payload] };
        case PUT_DATA:
            return {
                ...state,
                data: state.data.map((item) =>
                    item.id === payload.id ? payload : item
                ),
            };
        case SET_IS_LOADING:
            return { ...state, isLoading: payload };
        case SET_ERROR:
            return { ...state, error: payload };
        default:
            return state;
    }
}
