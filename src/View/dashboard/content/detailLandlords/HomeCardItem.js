import { ButtonBase, Card, CardActionArea, Grid, IconButton, Paper, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Avt1 from '../../../../img/sonhalenh.jpg';
// import Img3 from '../../../img/banner-3.jpg';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const HomeCardItem = () => {
  return (
    <Card>
      <CardActionArea>
        <Paper
          sx={{
            p: 2,
            margin: 'auto',
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={2} sx={{ textAlign: 'left' }}>
            <Grid item>
              <ButtonBase sx={{ width: 136, height: 136 }}>
                <Img alt="complex" src={Avt1} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Title room
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Price: 500$
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" >
                    Type |  a hour ago
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  <IconButton aria-label="delete" color="error">
                    <FavoriteBorderIcon />
                  </IconButton>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </CardActionArea>
    </Card>
    )
}

export default HomeCardItem