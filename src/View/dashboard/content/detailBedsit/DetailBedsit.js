import React from "react";
import { Grid, Box } from "@mui/material";
import { Paper } from "@mui/material";
const DetailBedsit = () => {
	return (
		<React.Fragment>
			<Grid item xs>
				<h1>left</h1>
			</Grid>
			<Grid item xs={8}>
				<Box>
					<Paper>bedsit</Paper>
					<h1>Bedsit</h1>
				</Box>
			</Grid>
			<Grid item xs>
				<h1>right</h1>
			</Grid>
		</React.Fragment>
	);
};

export default DetailBedsit;
