import React from "react";
import Grid from "@mui/material/Grid";
import CardItem from "./CardItem";

const ListBed = () => {
	return (
		<Grid container item xs={12}>
			<Grid item xs={4}>
				<CardItem />
				<CardItem />
			</Grid>
			<Grid item xs={4}>
				<CardItem />
				<CardItem />
			</Grid>
			<Grid item xs={4}>
				<CardItem />
				<CardItem />
			</Grid>
		</Grid>
	);
};

export default ListBed;
