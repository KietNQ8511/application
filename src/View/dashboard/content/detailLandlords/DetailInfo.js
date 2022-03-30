import { Grid } from '@mui/material'
import React from 'react'
import Home from './Home'
import PersonalInfo from './PersonalInfo'

const DetailInfo = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container>
            <PersonalInfo />
          </Grid>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <hr />
        <Grid item xs={12}>
          <Home />
        </Grid>
    </Grid>
  )
}

export default DetailInfo