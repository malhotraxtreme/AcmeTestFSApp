import './global.css';
import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import DataTable from './components/datatable';
import AddDevice from './components/addDevice';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
  }
})
function App() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container maxWidth="lg" className={classes.container}>

        <DataTable />
        <AddDevice />

        <Footer />
      </Container>
    </>
  );
}

export default App;
