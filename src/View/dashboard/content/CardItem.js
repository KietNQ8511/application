import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { makeStyles } from '@mui/styles';
import { Card, CardActionArea } from '@mui/material';

const useStyles = makeStyles({
    root: {
        background: '#f7f7f7',
        padding: '3px',
        boxShadow: '0 0 5px 2px rgb(0 0 0 / 5%);',
        borderRadius: '5px',
        paddingBottom: '20px'
    },
    title: {
        paddingTop: '2px'
    },
    info: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    infoItem: {
        display: 'flex'
    },
    infoItemSelf: {
        alignSelf: 'center'
    },
    imgStyle: {
        width: 380,
        height: 200,
        objectFit: 'contain'
    }
});

const CardItem = ({ title, person, area, price, image, city, district, ward }) => {
    const classes = useStyles();
    return (
        <Card
            style={{
                backgroundColor: '#b388ff',
                border: '1px solid #5e35b1',
                margin: '4px'
            }}
        >
            <CardActionArea href="/bedsit">
                <div
                    // sx={{
                    // 	bgcolor: "#d1c4e9",
                    // }}
                    className={classes.root}
                >
                    <div className="card-row">
                        <img
                            style={{
                                width: '100%'
                            }}
                            className={classes.imgStyle}
                            src={image}
                            alt="rental"
                        />
                    </div>
                    <div>
                        <h3>{title}</h3>
                    </div>
                    <hr />
                    <div className={classes.info}>
                        <div className={classes.infoItem}>
                            <PersonIcon />
                            <p className={classes.infoItemSelf}>Person &nbsp; &nbsp;</p>
                            <div>
                                <p>{person}</p>
                            </div>
                        </div>
                        <div className={classes.infoItem}>
                            <AspectRatioIcon />
                            <p className={classes.infoItemSelf}>Area &nbsp; &nbsp;</p>
                            <div>
                                <p>{area}m</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingLeft: 5 }}>
                        <h5 style={{ textAlign: 'left', fontSize: 15 }}> Price: {price} đ / Month </h5>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: 12 }}>
                            {city} - {district} - {ward}
                        </span>
                    </div>
                </div>
            </CardActionArea>
        </Card>
    );
};

export default CardItem;
