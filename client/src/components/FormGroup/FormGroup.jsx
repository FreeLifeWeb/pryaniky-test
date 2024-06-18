import { Box, Button, FormGroup, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Spinner } from '../Spinner/Spinner';
import style from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addDataElement, putData } from '../../redux/actions/dataAction';

export const FormForAddData = ({ handleClose, existingData }) => {
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((store) => store.data);
    const [formData, setFormData] = useState({
        companySigDate: '',
        companySignatureName: '',
        documentName: '',
        documentStatus: '',
        documentType: '',
        employeeNumber: '',
        employeeSigDate: '',
        employeeSignatureName: '',
    });

    useEffect(() => {
        if (existingData) {
            const companySigDate = new Date(existingData.companySigDate)
                .toISOString()
                .slice(0, 16);
            const employeeSigDate = new Date(existingData.employeeSigDate)
                .toISOString()
                .slice(0, 16);

            setFormData({
                ...existingData,
                companySigDate,
                employeeSigDate,
            });
        }
    }, [existingData]);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    function addHandler(e) {
        e.preventDefault();
        const data = {
            ...formData,
            companySigDate: new Date(formData.companySigDate).toISOString(),
            employeeSigDate: new Date(formData.employeeSigDate).toISOString(),
        };
        if (existingData) {
            dispatch(putData(data, existingData.id));
        } else {
            dispatch(addDataElement(data));
        }
        handleClose();
    }

    return (
        <Box
            noValidate
            autoComplete="off"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <form onSubmit={(e) => addHandler(e)} className={style.formGroup}>
                <FormGroup
                    sx={{
                        flexGrow: 1,
                        borderRadius: '10px',
                        padding: '14px',
                        gap: '4px',
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, textAlign: 'center' }}
                    >
                        {existingData
                            ? 'Edit table information'
                            : 'Add table information'}
                    </Typography>
                    <TextField
                        name="companySigDate"
                        required
                        id="outlined-companySigDate"
                        label="companySigDate..."
                        type="datetime-local"
                        value={formData.companySigDate}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        name="companySignatureName"
                        required
                        id="outlined-companySignatureName-input"
                        label="companySignatureName..."
                        type="text"
                        value={formData.companySignatureName}
                        onChange={handleChange}
                    />
                    <TextField
                        name="documentName"
                        required
                        id="outlined-documentName-input"
                        label="documentName..."
                        type="text"
                        value={formData.documentName}
                        onChange={handleChange}
                    />
                    <TextField
                        name="documentStatus"
                        required
                        id="outlined-documentStatus-input"
                        label="documentStatus..."
                        type="text"
                        value={formData.documentStatus}
                        onChange={handleChange}
                    />
                    <TextField
                        name="documentType"
                        required
                        id="outlined-documentType-input"
                        label="documentType..."
                        type="text"
                        value={formData.documentType}
                        onChange={handleChange}
                    />
                    <TextField
                        name="employeeNumber"
                        required
                        id="outlined-employeeNumber-input"
                        label="employeeNumber..."
                        type="text"
                        value={formData.employeeNumber}
                        onChange={handleChange}
                    />
                    <TextField
                        name="employeeSigDate"
                        required
                        id="outlined-employeeSigDate-input"
                        label="employeeSigDate..."
                        type="datetime-local"
                        value={formData.employeeSigDate}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        name="employeeSignatureName"
                        required
                        id="outlined-employeeSignatureName-input"
                        label="employeeSignatureName..."
                        type="text"
                        value={formData.employeeSignatureName}
                        onChange={handleChange}
                    />
                    <Button type="submit" variant="contained">
                        {isFetching ? <Spinner /> : 'Submit'}
                    </Button>
                    <div className="g-signin2" data-onsuccess="onSignIn" />
                </FormGroup>
            </form>
            <div> {error && <span className={style.err}>{error}</span>} </div>
        </Box>
    );
};
