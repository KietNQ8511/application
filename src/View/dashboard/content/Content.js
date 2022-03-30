import React from 'react'
import Grid from '@mui/material/Grid';
import Banner from './Banner';
import ListBed from './ListBed';
import Footer from '../footer/Footer';

// import ImgQc from '../../../img/leftQC.jpg';



const Content = () => {
  return (
    <React.Fragment>
      <Grid item xs={2} sx={{ background: '#e3f2fd'}} />
      <Grid container spacing={2} item xs={8}>
        <Banner />
        <ListBed />
      </Grid>
      <Grid item xs={2} sx={{ background: '#e3f2fd'}} />
    {/* ****************************************************************** */}
      <Footer />
    </React.Fragment>
  )
}

export default Content