import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    marginTop: {
        marginTop: '20px'
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function Dashboard() {
    const classes = useStyles();
    return (
        <Grid container className={classes.marginTop}>
            <Grid container item xs={4}>
                as1
            </Grid>
            <Grid container item xs={4}>
                2sdf
            </Grid>
            <Grid container item xs={4}>
                3asdssfgsdgsdfgiedrfngiou
            </Grid>
        </Grid>
    );
}

export default Dashboard;
