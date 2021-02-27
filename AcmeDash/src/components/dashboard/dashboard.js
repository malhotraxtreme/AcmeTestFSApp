import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '../table/table';

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
            <Table />
        </Grid>
    );
}

export default Dashboard;
