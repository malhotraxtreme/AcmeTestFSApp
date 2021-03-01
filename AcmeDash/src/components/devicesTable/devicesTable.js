import { useHistory } from "react-router-dom";
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setDevices } from '../../store/actions/dashActions';
import io from 'socket.io-client';

import { getAllDevices } from '../../api/api';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function DevicesTable(props) {
    const history = useHistory();
    const classes = useStyles();

    //Sockets
    const apiUrl = "http://localhost:8000";
    const socket = io(apiUrl);
    socket.on('deviceUpdated', async (data) => {
        console.log("Device Updated", data);
        await getDeviceData();
    });

    useEffect(async () => {
        await getDeviceData();
    }, []);

    const getDeviceData = async () => {
        await getAllDevices().then((data) => {
            props.setDevices(data);
        });
    }

    const handleOpenInfo = (index) => {
        history.push('/device', { device: props.state[index] });
    }


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Device Type</TableCell>
                        <TableCell>Device Properties</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.state.length > 0 && props.state.map((row, index) => (
                        <TableRow key={row.name} onClick={() => handleOpenInfo(index)}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.deviceType}</TableCell>
                            <TableCell>{row.properties.length}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapStateToProps = state => ({
    state
});
const mapDispatchToProps = dispatch => ({
    setDevices: (payload) => dispatch(setDevices(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DevicesTable);