import axios from 'axios';
import { SET_ERROR, SET_IS_LOADING, SET_USER } from '../types/types';
import { setToken } from '../../utils/localStore';

export const setUser = (payload) => ({ type: SET_USER, payload });
export const setErr = (payload) => ({ type: SET_ERROR, payload });
export const setLoading = (payload) => ({ type: SET_IS_LOADING, payload });

export const regUser = (e) => (dispatch) => {
    e.preventDefault();
    const { login, password } = Object.fromEntries(new FormData(e.target));
    // console.log('login: ' + login, password);
    dispatch(setLoading(true));
    axios
        .post('/ru/data/v3/testmethods/docs/login', {
            login,
            password,
        })
        .then((res) => {
            const token = res.data.data.token;
            setToken(token);
            dispatch(setUser(token));
        })
        .catch((err) => {
            dispatch(setErr('wrong login or password!'));
        })
        .finally(() => dispatch(setLoading(false)));
};
