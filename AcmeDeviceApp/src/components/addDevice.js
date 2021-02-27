import React, { useState } from 'react';

import DataModal from './dataModal';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({

    addBtn: {
    },
    wrapper: {
        margin: '10px',
    }
}));

export default function AddDevice() {
    const classes = useStyles();
    const [editModalOpen, setEditModalOpen] = useState(false);

    const handleAddDevice = () => {
        setEditModalOpen(true);
    }

    return (
        <div className={classes.wrapper}>
            <Fab color="primary" aria-label="add" className={classes.addBtn} onClick={handleAddDevice}>
                <AddIcon />
            </Fab>
            <DataModal open={editModalOpen} setOpen={setEditModalOpen} mode="Add" />
        </div>
    )
}
