import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCompanies } from '../../store/actions/company';
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

import './companies.css';

class Companies extends Component {

    static propTypes = {
        getCompanies: PropTypes.func.isRequired,
        companies: PropTypes.array.isRequired
    }

    static defaultProps = {
        companies: []
    }

    componentWillMount() {
        this.props.getCompanies();
        console.log(this.props.companies);
    }

    render() {

        return (
            <Fragment>
                <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    onClick={() => { alert('Later') }}
                    className='btn'>
                    Add new Company
                </Button>
                <TableContainer component={Paper}>
                    <Table className='table' aria-label="simple table">
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
                            { this.props.companies.map((company) => (
                                <TableRow key={company.id}>
                                    <TableCell component="th" scope="row">
                                        {company.name}
                                    </TableCell>
                                    <TableCell>{company.tax_number}</TableCell>
                                    <TableCell>{company.company_registration_number}</TableCell>
                                    <TableCell>{company.phone_number}</TableCell>
                                    <TableCell>{company.bank_account_number}</TableCell>
                                    <TableCell>{company.company_form_id}</TableCell>
                                    <TableCell>{company.location_id}</TableCell>
                                    <TableCell>{company.comment}</TableCell>
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
}

const mapStateToProps = (state) => ({
    companies: state.companies
})

const dispatchToProps = (dispatch) => ({
    getCompanies: () => dispatch(getCompanies())
})

export default connect(mapStateToProps, dispatchToProps)(Companies);
