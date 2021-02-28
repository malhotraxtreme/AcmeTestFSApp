import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DevicesTable from '../devicesTable/devicesTable';

const useStyles = makeStyles((theme) => ({
    tableGrid: {
        marginTop: '20px',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    root: {
        flexGrow: 1,
    }
}));

function Dashboard() {
    const classes = useStyles();
    return (
        <Grid container className={classes.tableGrid}>
            <DevicesTable />
        </Grid>
    );
}

export default Dashboard;
