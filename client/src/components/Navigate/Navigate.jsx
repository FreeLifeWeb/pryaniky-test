import React, { useEffect } from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { deleteToken, getToken } from '../../utils/localStore';
export function NavBar() {
    const userToken = getToken();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userToken) {
            navigate('/login');
        }
    }, [userToken, navigate]);

    function logoutUser() {
        deleteToken();
        navigate('/login');
    }

    return (
        <Box sx={{ flexGrow: 1, marginBottom: '10px' }}>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex' }}>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        {userToken ? (
                            <>
                                <NavLink
                                    to="/"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button
                                        variant="text"
                                        sx={{ color: 'white' }}
                                    >
                                        <Typography
                                            variant="h6"
                                            component="div"
                                        >
                                            Table
                                        </Typography>
                                    </Button>
                                </NavLink>
                                <Box>
                                    <Button
                                        variant="text"
                                        onClick={logoutUser}
                                        sx={{ color: 'white' }}
                                    >
                                        <LogoutIcon />
                                    </Button>
                                </Box>
                            </>
                        ) : (
                            <NavLink
                                to="/login"
                                style={{ textDecoration: 'none' }}
                            >
                                <Button variant="text" sx={{ color: 'white' }}>
                                    <Typography variant="h6" component="div">
                                        Login
                                    </Typography>
                                </Button>
                            </NavLink>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
