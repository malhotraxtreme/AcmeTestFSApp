import React from 'react';
import "./containerWrapper.css";
import Header from '../../components/header/header';
import Dashboard from '../../components/dashboard/dashboard';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/Inbox';

const drawerWidth = 60;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
    },
}));

export default function ContainerWrapper() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <List>
                    <ListItem button>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <Header className="resetPadding" />
                <Container maxWidth="lg" >
                    <Dashboard />
                </Container>
            </main>
        </div>

    );
}