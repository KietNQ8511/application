import React from 'react';

import { Box, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material';

import BadgeIcon from '@mui/icons-material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';

import { ReactComponent as Zalo } from '../../../../img/zalo.svg';

import { makeStyles } from '@mui/styles';

// ************************************************* //

const useStyles = makeStyles({
    root: {
        height: '47vh'
    },
    icon: {
        height: 24,
        width: 24,
        marginLeft: 10
    }
});

// ************************************************************************** //

const LandLordInfo = () => {
    const classes = useStyles();
    return (
        <Box sx={{ padding: 3 }}>
            <Paper align="left" className={classes.root}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <BadgeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Nguyễn Quốc Kiệt" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText primary="kiet8511@gmail.com" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <PhoneIcon />
                            </ListItemIcon>
                            <ListItemText primary="0359303687" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <Link href="http://facebook.com" className={classes.link} target="_blank">
                            <FacebookIcon className={classes.icon} />
                        </Link>
                        <Link href="https://zalo.me/pc" className={classes.link} target="_blank">
                            <Zalo className={classes.icon} />
                        </Link>
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default LandLordInfo;
