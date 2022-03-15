import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { makeStyles } from "@mui/styles";
import { Card, CardActionArea } from "@mui/material";

const useStyles = makeStyles({
	root: {
		background: "#f7f7f7",
		padding: "3px",
		boxShadow: "0 0 5px 2px rgb(0 0 0 / 5%);",
		borderRadius: "5px",
        paddingBottom: '20px'
	},
	title: {
		paddingTop: "2px",
	},
	info: {
		display: "flex",
        justifyContent: 'space-around',
        alignItems: 'center'
	},
	infoItem: {
		display: "flex"
	},
    infoItemSelf: {
        alignSelf: 'center'
    }
});

const CardItem = () => {
	const classes = useStyles();
	return (
		<Card>
			<CardActionArea href="/bedsit">
				<div className={classes.root}>
					<div className="card-row">
						<img
							style={{ width: "100%" }}
							src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
							alt="rental"
						/>
					</div>
					<div>
						<h3>Title</h3>
					</div>
					<hr />
					<div className={classes.info}>
						<div className={classes.infoItem}>
							<PersonIcon />
							<p className={classes.infoItemSelf}>Person &nbsp; &nbsp;</p>
							<div>
								<p>3+</p>
							</div>
						</div>
						<div className={classes.infoItem}>
							<AspectRatioIcon />
							<p className={classes.infoItemSelf}>Area &nbsp; &nbsp;</p>
							<div>
								<p>220 m</p>
							</div>
						</div>
					</div>
					<div>
						<h5 style={{textAlign: 'right'}}>Price: 100$ / month</h5>
					</div>
				</div>
			</CardActionArea>
		</Card>
	);
};

export default CardItem;
