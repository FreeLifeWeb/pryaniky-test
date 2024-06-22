import React, { useEffect, useState } from 'react';
import { DataTables } from '../../components/DataTable/DataTable';
import { Button } from '@mui/material';
import BasicModal from '../../components/Modal/Modal';
import { FormForAddData } from '../../components/FormGroup/FormGroup';
import style from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDataTable } from '../../redux/actions/dataAction';
import { Spinner } from '../../components/Spinner/Spinner';

export const Main = () => {
    const { data, isLoading } = useSelector((store) => store.data);
    const [open, setOpen] = useState(false);
    const [editData, setEditData] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDataTable());
    }, [dispatch]);

    const handleClose = () => {
        setOpen(false);
        setEditData(null);
    };

    const handleEdit = (data) => {
        setEditData(data);
        setOpen(true);
    };
    if (isLoading) {
        return <Spinner />;
    }
    return (
        <div>
            <div className={style.addButtonContainer}>
                <Button
                    onClick={() => setOpen(true)}
                    variant="contained"
                    color="primary"
                    size="large"
                >
                    Add data
                </Button>
            </div>
            <BasicModal setOpen={setOpen} open={open} handleClose={handleClose}>
                <FormForAddData
                    handleClose={handleClose}
                    existingData={editData}
                />
            </BasicModal>
            {data && <DataTables handleEdit={handleEdit} data={data} />}
        </div>
    );
};
