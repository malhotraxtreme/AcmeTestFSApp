import React, { useState, useEffect, useContext } from 'react';
import { createDevice, updateDevice } from '../state/httpRequests';
import { DeviceContext } from '../state/deviceStore';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({

    dialog: {
        minWidth: 800,
    },
    padding10: {
        padding: '10px',
    },
    justifyCenter: {
        justifyContent: "center",
        paddingTop: '15px'
    },
    marginUp: {
        marginTop: '10px',
    }
}));

export default function DataModal({ mode, open, setOpen, deviceData }) {

    const classes = useStyles();
    const [state, dispatch] = useContext(DeviceContext);
    const [properties, setProperties] = useState(
        [{
            attrName: "",
            attrValue: "",
            units: ""
        }]
    );
    const [objId, setObjId] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [deviceType, setDeviceType] = useState("");

    useEffect(() => {
        if (deviceData && deviceData.name && deviceData.properties.length > 0) {
            setName(deviceData.name);
            setStatus(deviceData.status);
            setDeviceType(deviceData.deviceType);
            setProperties(deviceData.properties);
            setObjId(deviceData._id)
        }
    }, [deviceData]);

    const handleClose = () => {
        setOpen(false);
    };

    const handlePropertyTxFields = (index, attr, value) => {
        const newproperties = [...properties];
        newproperties[index][attr] = value;
        setProperties(newproperties);
    };

    const handleAddProperty = () => {
        const newproperties = [...properties];
        newproperties.push({
            attrName: "",
            attrValue: "",
            units: ""
        });
        setProperties(
            [...newproperties]
        );
    };

    const handleRemoveProperty = (index) => {
        const newproperties = [...properties];
        newproperties.splice(index, 1);
        setProperties(
            [...newproperties]
        );
    };

    const handleSave = async () => {
        const deviceObj = {
            name,
            deviceType,
            status,
            properties
        }
        if (mode === "Add") {
            await createDevice(deviceObj)
                .then(data => {
                    dispatch({ type: "CREATED_DEVICE", payload: data });
                })
                .catch(e => console.log(e));
        }
        else {
            await updateDevice(objId, deviceObj)
                .then(data => {
                    dispatch({ type: "UPDATED_DEVICE" });
                })
                .catch(e => console.log(e));
        }
        handleClose();
    }

    return (
        <div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
                <DialogTitle id="form-dialog-title">{mode} Device</DialogTitle>
                <DialogContent>
                    <Typography variant="subtitle2" color="primary">Device Info</Typography>
                    <Grid container>
                        <Grid container item xs={12} className={classes.padding10}><TextField
                            id={objId + "name"}
                            label="Name"
                            type="text"
                            fullWidth
                            value={name}
                            onChange={e => setName(e.target.value)}
                        /></Grid>
                        <Grid container item xs={12} className={classes.padding10}><TextField
                            id={objId + "status"}
                            label="Status"
                            type="text"
                            fullWidth
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        /></Grid>
                        <Grid container item xs={12} className={classes.padding10}><TextField
                            id={objId + "type"}
                            label="Device type"
                            type="text"
                            fullWidth
                            value={deviceType}
                            onChange={e => setDeviceType(e.target.value)}
                        /></Grid>
                    </Grid>
                    <Typography variant="subtitle2" color="primary" className={classes.marginUp}>Sensor Properties</Typography>
                    {properties.length > 0 && properties.map((property, index) => (

                        <Grid container key={index + "-" + property.attrName}>
                            <Grid container item xs={5} className={classes.padding10}><TextField
                                autoFocus
                                id={objId + "property" + index}
                                label="Sensor Property"
                                type="text"
                                fullWidth
                                value={property.attrName}
                                onChange={e => handlePropertyTxFields(index, "attrName", e.target.value)}
                            /></Grid>
                            <Grid container item xs={3} className={classes.padding10}><TextField
                                id={objId + "value" + index}
                                label="Value"
                                type="text"
                                fullWidth
                                value={property.attrValue}
                                onChange={e => handlePropertyTxFields(index, "attrValue", e.target.value)}
                            /></Grid>
                            <Grid container item xs={3} className={classes.padding10}><TextField
                                id={objId + "units" + index}
                                label="Units"
                                type="text"
                                fullWidth
                                value={property?.units}
                                onChange={e => handlePropertyTxFields(index, "units", e.target.value)}
                            /></Grid>
                            <Grid container item xs={1} className={classes.padding10}>
                                <IconButton color="secondary" onClick={() => handleRemoveProperty(index)}>
                                    <ClearIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    ))}

                    <Grid container className={classes.justifyCenter}>
                        <Button color="primary" variant="contained" onClick={handleAddProperty}>
                            <AddIcon />Add Sensor Property
                        </Button>
                    </Grid>



                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
