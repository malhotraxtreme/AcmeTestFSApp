
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
    infoGrid: {}
}));


export default function Device(props) {
    console.log(props.location.state, "EEEEEEEEEEEEEE");
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.root}>
            <Grid container className={classes.infoGrid}>
                <Grid item xs={4}>
                    <Typography variant="h3" component="h3" gutterBottom>
                        Title
            </Typography>
                </Grid>
                <Grid container item xs={8}>
                    <Grid item xs={4}><Typography variant="body1" gutterBottom>
                        Prop
            </Typography></Grid>
                    <Grid item xs={8}><Typography variant="subtitle1" gutterBottom>
                        Val
            </Typography></Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}