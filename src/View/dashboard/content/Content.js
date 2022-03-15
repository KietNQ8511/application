import React from 'react'
import Grid from '@mui/material/Grid';
import Banner from './Banner';
import ListBed from './ListBed';

const Content = () => {
  return (
    <React.Fragment>
      <Grid item xs>
        <h1>left</h1>
      </Grid>
      <Grid container spacing={2} item xs={8}>
        <Banner />
        <ListBed />
      </Grid>
      <Grid item xs>
        <h1>right</h1>
      </Grid>
    </React.Fragment>
  )
}

export default Content