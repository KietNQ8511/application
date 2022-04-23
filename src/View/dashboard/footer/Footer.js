import React from 'react';

import { Box, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { Typography } from '@mui/material';

import Logo from '../../../img/Logo.PNG';

import Grid from '@mui/material/Grid';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        height: '47vh'
    },
    icon: {
        height: 24,
        width: 24,
        marginLeft: 10
    },
    mt: {
        marginTop: 15
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container textAlign="left" item xs={12}>
                <Grid xs={2} sx={{ background: '#bbdefb' }} />
                <Grid item xs={4} sx={{ background: '#bbdefb' }}>
                    <img
                        width={300}
                        src={Logo}
                        alt="logo"
                    />
                </Grid>
                <Grid item xs={4} sx={{ background: '#bbdefb' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            p: 1,
                            justifyContent: 'flex-end',
                            m: 1,
                            height: 100,
                            borderRadius: 1
                        }}
                    >
                        <FacebookIcon color="primary" />
                        <LinkedInIcon color="primary" />
                        <MailOutlineIcon />
                        <YouTubeIcon color="error" />
                    </Box>
                </Grid>
                <Grid xs={2} sx={{ background: '#bbdefb' }} />
            </Grid>
            {/* ****************************************************************** */}
            <Grid container item xs={12}>
                <Grid container item sx={{ background: '#bbdefb' }}>
                    <Grid item xs={2} />
                    <Grid item xs={3} textAlign="left">
                        <Typography alignItems="left" fontSize={16} sx={{ fontWeight: 'bold' }}>
                            Contact Us
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LocationOnIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Đà Nẵng" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <EmailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Email" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ContactPhoneIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="0359303687" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="© 2020. All rights reserved." />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography alignItems="left" fontSize={16} sx={{ fontWeight: 'bold' }}>
                            Fill Form to contact me
                        </Typography>
                        <div className={classes.mt}>
                            <input class="form-control form-control-lg" type="text" placeholder="Name" />
                        </div>
                        <div className={classes.mt}>
                            <input class="form-control form-control-lg" type="text" placeholder="Email" />
                        </div>
                        <div className={classes.mt}>
                            <input class="form-control form-control-lg" type="text" placeholder="Phone" />
                        </div>
                        <div className={classes.mt}>
                            <button type="submit" class="btn btn-primary mb-2">
                                Submit
                            </button>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography alignItems="left" fontSize={16} sx={{ fontWeight: 'bold' }}>
                            Quick link
                        </Typography>
                        <Link href="/">Facebook</Link>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Footer;
