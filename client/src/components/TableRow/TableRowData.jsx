import { TableRow, styled } from '@mui/material';
import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import style from './styles.module.css';
import EditNoteIcon from '@mui/icons-material/EditNote';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const TableRowData = ({
    StyledTableCell,
    dataTable,
    handleDelete,
    handleEdit,
}) => {
    return (
        <>
            {dataTable &&
                dataTable.map((data) => (
                    <StyledTableRow key={data.id}>
                        <StyledTableCell component="th" scope="row">
                            {data.companySigDate}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            {data.companySignatureName}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            {data.documentName}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            {data.documentStatus}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            {data.documentType}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            {data.employeeNumber}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            {data.employeeSigDate}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                            {data.employeeSignatureName}
                        </StyledTableCell>
                        <StyledTableCell
                            align="left"
                            onClick={() => handleDelete(data.id)}
                        >
                            <DeleteForeverIcon className={style.delete} />
                        </StyledTableCell>
                        <StyledTableCell
                            align="left"
                            onClick={(e) => handleEdit(data)}
                        >
                            <EditNoteIcon className={style.editnote} />
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
        </>
    );
};
