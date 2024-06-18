import React from 'react';
import { DataTables } from '../../components/DataTable/DataTable';
import { Button } from '@mui/material';
import BasicModal from '../../components/Modal/Modal';
import { FormForAddData } from '../../components/FormGroup/FormGroup';
import style from './styles.module.css';

export const Main = () => {
    const [open, setOpen] = React.useState(false);
    const [editData, setEditData] = React.useState(null);

    const handleClose = () => {
        setOpen(false);
        setEditData(null);
    };

    const handleEdit = (data) => {
        setEditData(data);
        setOpen(true);
    };

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
            <DataTables handleEdit={handleEdit} />
        </div>
    );
};
