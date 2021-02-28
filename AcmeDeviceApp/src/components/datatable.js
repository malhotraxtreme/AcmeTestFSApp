import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { getAllDevices, deleteDevice } from '../state/httpRequests';
import DataModal from './dataModal';
import { DeviceContext } from '../state/deviceStore';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    gridMargin: {
        padding: '10px',
    },
    justifyRight: {
        justifyContent: "flex-end"
    }
}));

export default function DataTable() {
    const classes = useStyles();
    const [state, dispatch] = useContext(DeviceContext);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deviceChosen, setDeviceChosen] = useState({});

    useEffect(async () => {
        await getAllDevices().then((allDeviceDataRows) => {
            dispatch({ type: "SET_DEVICES", payload: allDeviceDataRows })
        }).catch(e => console.log(e));
    }, [])

    const formatDate = (date) => {
        const newDateObj = new Date(date);
        return newDateObj.toLocaleDateString();
    };

    const handleEditDevice = (index) => {
        setDeviceChosen(state.devices[index]);
        setEditModalOpen(true);
    }

    const handleDeleteDevice = async (id) => {
        await deleteDevice(id)
            .then(() => dispatch({ type: "DELETED_DEVICE", payload: id }))
            .catch(e => console.log(e));
    }

    return (

        <Grid container>
            {state.devices.length > 0 && state.devices.map((device, index) => (

                <Grid container item xs={4} spacing={0} key={device._id} className={classes.gridMargin}>

                    <Card className={classes.root}>
                        <CardHeader title={device.name} subheader={device.deviceType} />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Status : {device.status}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Created on : {device.createdAt && formatDate(device.createdAt)}
                            </Typography>
                            <br />
                            <Typography variant="body2" color="primary">Properties</Typography>
                            {device.properties.length > 0 && device.properties.map((property) => (
                                <Grid container item key={property.attrName + "_" + index}>
                                    <Grid item xs={5}>
                                        <Typography variant="subtitle2">
                                            {property.attrName}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <Typography variant="caption">
                                            {property.attrValue} {property.units}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            ))}

                        </CardContent>
                        <CardActions disableSpacing className={classes.justifyRight}>
                            <IconButton aria-label="edit device" onClick={() => handleEditDevice(index)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete device" onClick={() => { handleDeleteDevice(device._id) }}>
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>

                </Grid>)

            )
            }

            <DataModal open={editModalOpen} setOpen={setEditModalOpen} mode="Edit" deviceData={deviceChosen} />
        </Grid >
    )
}