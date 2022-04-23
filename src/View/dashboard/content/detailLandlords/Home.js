import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import HomeCardItem from './HomeCardItem';

const Home = () => {
    return (
        <Grid container spacing={2}>
            <Grid sx={{ textAlign: 'left' }} item xs={12}>
                <Typography inline component="span" align="left" sx={{
                    paddingLeft: 5
                }}>
                    Phòng đang cho thuê
                </Typography>
                <Divider variant="fullWidth" />
            </Grid>
            <Grid item xs={12}>
                <HomeCardItem />
                <HomeCardItem />
            </Grid>
        </Grid>
    );
};

export default Home;
