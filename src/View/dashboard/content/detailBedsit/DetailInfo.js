import { Avatar, Grid, Box, ListItem, ListItemAvatar, ListItemText, Paper, List, ListItemButton, ListItemIcon } from '@mui/material';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import StyleIcon from '@mui/icons-material/Style';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import DescriptionIcon from '@mui/icons-material/Description';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        height: '47vh'
    }
});

const DetailInfo = () => {
    const classes = useStyles();
    return (
        <Box sx={{ padding: 3 }}>
            <Paper align="left" className={classes.root}>
                <Grid container>
                    <Grid item>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon color="primary" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Person" secondary="3" />
                        </ListItem>
                    </Grid>
                    <Grid>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <AspectRatioIcon color="primary" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Area" secondary="20" />
                        </ListItem>
                    </Grid>
                </Grid>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <StyleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Manchester United at Old Trafford UK" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <WhereToVoteIcon />
                            </ListItemIcon>
                            <ListItemText primary="Thạc Gián, Thanh Khê, Đà Nẵng" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <DescriptionIcon />
                            </ListItemIcon>
                            <ul>
                                <li>
                                    <ListItemText primary="Phòng trọ mới xây, không chung chủ, giờ giấc thoải mái, an ninh tốt." />
                                </li>
                                <li>
                                    <ListItemText primary="Đường kiệt ô tô đi được, không bị ngập lụt." />
                                </li>
                                <li>
                                    <ListItemText primary="Phòng sạch sẽ thoáng mát, thích hợp cho 2 - 3 người ở." />
                                </li>
                                <li>
                                    <ListItemText primary="Có bếp, vệ sinh trong riêng tư" />
                                </li>
                            </ul>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default DetailInfo;
