import React, { useState } from 'react';

import DataModal from './dataModal';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({

    addBtn: {
    },
    wrapper: {
        margin: '20px',
        textAlign: "center",
    }
}));

export default function AddDevice() {
    const classes = useStyles();
    const [addModalOpen, setAddModalOpen] = useState(false);

    const handleAddDevice = () => {
        setAddModalOpen(true);
    }

    return (
        <Grid className={classes.wrapper}>
            <Fab color="primary" aria-label="add" className={classes.addBtn} onClick={handleAddDevice}>
                <AddIcon />
            </Fab>
            <DataModal open={addModalOpen} setOpen={setAddModalOpen} mode="Add" />
        </Grid>
    )
}
