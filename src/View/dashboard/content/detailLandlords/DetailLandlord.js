import React from 'react';
import Grid from '@mui/material/Grid';
import DetailInfo from './DetailInfo';
import Footer from '../../footer/Footer';

const DetailLandlord = () => {
    return (
        <React.Fragment>
            <Grid item xs={2} sx={{ background: '#e3f2fd' }} />
            <Grid item xs={8}>
                <DetailInfo />
            </Grid>
            <Grid item xs={2} sx={{ background: '#e3f2fd' }} />
            <Footer />
        </React.Fragment>
    );
};

export default DetailLandlord;
