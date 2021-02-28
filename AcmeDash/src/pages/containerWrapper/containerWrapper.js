import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from '../../components/header/header';
import Dashboard from '../../components/dashboard/dashboard';
import Container from '@material-ui/core/Container';
import Footer from '../../components/footer/footer';
import Device from '../device/device';

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
    list: {
        overflow: 'hidden',
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
        minHeight: '100vh'
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
                <List className={classes.list}>
                    <ListItem button>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <Router>
                <main className={classes.content}>
                    <Header />
                    <Container maxWidth="lg" >
                        <Switch>
                            <Route path='/' exact component={Dashboard} />
                            <Route path='/device' exact component={Device} />
                        </Switch>
                    </Container>
                    <Footer />
                </main>
            </Router>
        </div>

    );
}