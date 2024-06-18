import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, FormGroup, TextField, Typography } from '@mui/material';
import { regUser } from '../../redux/actions/userAction';
import style from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../utils/localStore';
import { Spinner } from '../Spinner/Spinner';
export function Login() {
    const dispatch = useDispatch();
    const userToken = getToken();
    const { error, isFetching } = useSelector((store) => store.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (userToken) {
            navigate('/');
        }
    }, [userToken, navigate]);

    function regHendler(e) {
        dispatch(regUser(e));
    }

    return (
        <Box
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="80vh"
        >
            <div className={style.formGroup}>
                <form onSubmit={(e) => regHendler(e)}>
                    <FormGroup
                        sx={{
                            flexGrow: 1,
                            borderRadius: '10px',
                            backgroundColor: 'white',
                            padding: '14px',
                        }}
                    >
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, textAlign: 'center' }}
                        >
                            Войти
                        </Typography>
                        <TextField
                            name="login"
                            required
                            id="outlined-required"
                            label="Введите логин..."
                            type="text"
                        />
                        <TextField
                            name="password"
                            required
                            id="outlined-password-input"
                            label="Введите пароль..."
                            type="password"
                        />
                        <Button type="submit" variant="contained">
                            {isFetching ? <Spinner /> : 'Войти'}
                        </Button>
                        <div className="g-signin2" data-onsuccess="onSignIn" />
                    </FormGroup>
                </form>
            </div>
            <div> {error && <span className={style.err}>{error}</span>} </div>
        </Box>
    );
}
