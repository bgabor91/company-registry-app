import React, { Fragment, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCompanies } from '../../actions/company'
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650
    },
    margin: {
        margin: theme.spacing(1),
    }
}));

const CompanyListTable = ({ getCompanies, companies  }) => {  
    
    const classes = useStyles();
    
    useEffect(() => {
        getCompanies();
    }, [getCompanies]);

    console.log(companies);

    return (
        <Fragment>
            <Button
                variant="contained"
                size="medium"
                color="primary"
                onClick={() => { alert('Later') }}
                className={classes.margin}>
                Add new Company
            </Button>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Company Name</TableCell>
                            <TableCell>Tax Number</TableCell>
                            <TableCell>Company Registry Number</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Bank Account Number</TableCell>
                            <TableCell>Company Form</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Comment</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {companies.length > 0 && companies.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.calories}</TableCell>
                                <TableCell>{row.fat}</TableCell>
                                <TableCell>{row.carbs}</TableCell>
                                <TableCell>{row.protein}</TableCell>
                                <TableCell>{row.protein}</TableCell>
                                <TableCell>{row.protein}</TableCell>
                                <TableCell>{row.protein}</TableCell>
                                <TableCell>
                                    <DeleteIcon />
                                </TableCell>
                                <TableCell>
                                    <EditIcon />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

CompanyListTable.propTypes = {
    getCompanies: PropTypes.func.isRequired,
    companies: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    companies: state.companies
});

export default connect(mapStateToProps, { getCompanies })(CompanyListTable)
