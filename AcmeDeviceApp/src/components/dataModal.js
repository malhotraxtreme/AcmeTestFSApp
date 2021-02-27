import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({

    dialog: {
        minWidth: 500,
    }
}));

export default function DataModal({ mode, open, setOpen }) {

    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{mode} Device</DialogTitle>
                <DialogContent className={classes.dialog}>
                    {/* <DialogContentText>

                    </DialogContentText> */}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
