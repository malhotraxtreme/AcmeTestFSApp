import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '20px',
        padding: '20px',
    },
    infoGrid: {
        alignSelf: "flex-end",
        textAlign: "right",
    }
}));


export default function Device(props) {
    const classes = useStyles();
    const [device, setDevice] = useState({});

    useEffect(() => {
        setDevice(props.location.state.device);
    }, [props.location.state.device]);

    const formatDate = (date) => {
        const newDateObj = new Date(date);
        return newDateObj.toLocaleString();
    };

    return (
        <>
            <Paper elevation={3} className={classes.root}>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography variant="h3" component="h3" gutterBottom>
                            {device && device.name}
                        </Typography>
                        <Typography variant="body1" component="h3" gutterBottom>
                            {device && device.status}
                        </Typography>


                    </Grid >
                    <Grid item xs={8} className={classes.infoGrid}>
                        <Typography variant="body1" component="h3" gutterBottom>
                            Created at : {device && formatDate(device.createdAt)}
                        </Typography>
                        <Typography variant="body1" component="h3" gutterBottom>
                            Last Updated at : {device && formatDate(device.updatedAt)}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={3} className={classes.root}>
                <Grid container item xs={12}>
                    <Typography variant="h5" gutterBottom gutterTop>
                        Properties
                    </Typography>
                    {device && device.properties && device.properties.map(property => (
                        <Grid container item xs={12}>
                            <Grid item xs={4}>
                                <Typography variant="body1" gutterBottom>
                                    {property.attrName}
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="subtitle1" gutterBottom>
                                    {property.attrValue} {property.units}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}

                </Grid>
                {/* </Grid> */}
            </Paper>
        </>
    );
}