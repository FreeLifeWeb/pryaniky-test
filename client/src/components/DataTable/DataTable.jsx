import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { deleteElement, getAllDataTable } from '../../redux/actions/dataAction';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../Spinner/Spinner';
import { TableRowData } from '../TableRow/TableRowData';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export function DataTables({ handleEdit }) {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.data);

    React.useEffect(() => {
        dispatch(getAllDataTable());
    }, [dispatch]);

    function handleDelete(id) {
        dispatch(deleteElement(id));
    }

    // console.log('dataTable', data);
    return (
        <TableContainer
            component={Paper}
            sx={{ minWidth: '90%', overflowX: 'auto', margin: 'auto' }}
        >
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>companySigDate</StyledTableCell>
                        <StyledTableCell align="right">
                            companySignatureName
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            documentName
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            documentStatus
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            documentType
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            employeeNumber
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            employeeSigDate
                        </StyledTableCell>
                        <StyledTableCell align="right">
                            employeeSignatureName
                        </StyledTableCell>
                        <StyledTableCell align="right">Delete</StyledTableCell>
                        <StyledTableCell align="right">Edit</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.isLoading ? (
                        <TableRow>
                            <StyledTableCell colSpan={8} align="center">
                                <Spinner />
                            </StyledTableCell>
                        </TableRow>
                    ) : (
                        <TableRowData
                            StyledTableCell={StyledTableCell}
                            dataTable={data.data}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
