import { Avatar, Button, ButtonBase, Grid, Link, List, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material'
import React from 'react'

import StarBorderIcon from '@mui/icons-material/StarBorder'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FacebookIcon from '@mui/icons-material/Facebook';
import AddIcon from '@mui/icons-material/Add';

import { ReactComponent as Zalo } from "../../../../img/zalo.svg";

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: '47vh',
  },
  icon: {
	  height: 24,
	  width: 24,
	  marginLeft: 10,
  }
});

// const pageStyles = theme => ({
//   leftColumn: {
//     [theme.breakpoints.down('sm')]: {
//       margin: 0,
//       '& > .MuiGrid-item': {
//         padding: 0,
//       },
//     },
//   }
// });

const PersonalInfo = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Paper
          sx={{
            p: 2,
            borderRadius: 0,
            textAlign: 'left',
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
      >
        <Grid item sx={12}>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
              <Avatar
                alt="Remy Sharp"
                src="https://bitly.com.vn/qnr7ei"
                sx={{ width: 100, height: 100 }}
              />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item justify="flex-end" xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Trần Tình lệnh
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    3 Người đang theo dõi
                  </Typography>
                  <Button variant="outlined" startIcon={<AddIcon />}>
                    Follow
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        sx={{
          p: 2,
          borderRadius: 0,
          margin: 'auto',
          textAlign: 'left',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid sx={6}>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item justify="flex-end" xs>
                  <MenuList>
                    <MenuItem>
                      <ListItemIcon>
                        <StarBorderIcon />
                      </ListItemIcon>
                      <ListItemText>Đánh giá: 5    1 đánh giá</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemIcon>
                        <CalendarMonthIcon />
                      </ListItemIcon>
                      <ListItemText>Ngày tham gia: 23/06/2017</ListItemText>
                    </MenuItem>
                    <MenuItem >
                      <List>
                        <ListItem>
                          <Link href="http://facebook.com" className={classes.link} target="_blank" >
                            <FacebookIcon className={classes.icon}/>
                          </Link>
                          <Link href="https://zalo.me/pc" className={classes.link} target="_blank" >
                            <Zalo className={classes.icon} />
                          </Link>
                        </ListItem>
                      </List>
                    </MenuItem>
                  </MenuList>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default PersonalInfo