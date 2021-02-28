import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '50px',
        flexGrow: 1,
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0
    },
    toolBar: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'white',
        boxShadow: '0px -1px 5px rgba(0,0,0,0.3)'
    },
    btn: {
        marginRight: '10px'
    }
}));


export default function Footer() {
    const history = useHistory();
    const classes = useStyles();

    const handleBack = () => {
        history.goBack();
    }

    return (
        <div className={classes.root}>
            <Toolbar className={classes.toolBar}>
                <Button className={classes.btn} variant="contained" color="primary">Save</Button>
                <Button className={classes.btn} variant="contained" color="secondary" onClick={handleBack}>Back</Button>
            </Toolbar>
        </div>
    );
}