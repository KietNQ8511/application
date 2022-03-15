import React from 'react'
import Grid from '@mui/material/Grid'

const DetailDardLord = () => {
  return (
    <React.Fragment>
      <Grid item xs>
        <h1>left</h1>
      </Grid>
      <Grid item xs={8}>
        <h1>DetailDarklord</h1>
      </Grid>
      <Grid item xs>
        <h1>right</h1>
      </Grid>
    </React.Fragment>
  )
}

export default DetailDardLord