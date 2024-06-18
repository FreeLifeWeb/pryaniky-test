import axios from 'axios';
import {
    ADD_DATA,
    DELETE_DATA,
    GET_DATA,
    PUT_DATA,
    SET_ERROR,
    SET_IS_LOADING,
} from '../types/types';
import { getToken } from '../../utils/localStore';

export const getData = (payload) => ({ type: GET_DATA, payload });
export const deleteDataElement = (payload) => ({ type: DELETE_DATA, payload });
export const addElement = (payload) => ({ type: ADD_DATA, payload });
export const putDataElements = (payload) => ({ type: PUT_DATA, payload });
export const setErrorData = (payload) => ({ type: SET_ERROR, payload });
export const setIsLoadingData = (payload) => ({
    type: SET_IS_LOADING,
    payload,
});
const token = getToken();

export const getAllDataTable = () => (dispatch) => {
    dispatch(setIsLoadingData(true));
    axios
        .get('/ru/data/v3/testmethods/docs/userdocs/get', {
            headers: {
                'x-auth': token,
            },
        })
        .then((res) => {
            dispatch(getData(res.data.data));
            // console.log('redux', res.data.data);
        })
        .catch((err) => {
            dispatch(setErrorData('error when requesting data!'));
        })
        .finally(() => {
            dispatch(setIsLoadingData(false));
        });
};

export const deleteElement = (id) => (dispatch) => {
    dispatch(setIsLoadingData(true));
    axios
        .post(
            `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
            {},
            {
                headers: {
                    'x-auth': token,
                },
            }
        )
        .then((res) => dispatch(deleteDataElement(id)))
        .catch((err) => console.log(err))
        .finally(() => dispatch(setIsLoadingData(false)));
};

export const addDataElement = (data) => (dispatch) => {
    // console.log('data redux add: ', data);
    dispatch(setIsLoadingData(true));
    axios
        .post(`/ru/data/v3/testmethods/docs/userdocs/create`, data, {
            headers: {
                'x-auth': token,
            },
        })
        .then((res) => dispatch(addElement(res.data.data)))
        .catch((err) => dispatch(setErrorData('Error when adding data!')))
        .finally(() => dispatch(setIsLoadingData(false)));
};

export const putData = (data, id) => (dispatch) => {
    dispatch(setIsLoadingData(true));
    axios
        .post(`/ru/data/v3/testmethods/docs/userdocs/set/${id}`, data, {
            headers: {
                'x-auth': token,
            },
        })
        .then((res) => dispatch(putDataElements(res.data.data)))
        .catch((err) => dispatch(setErrorData('Error when edit data!')))
        .finally(() => dispatch(setIsLoadingData(false)));
};
