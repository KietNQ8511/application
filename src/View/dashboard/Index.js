import React from "react";
import { Grid } from "@mui/material";
import Header from "./header/Header";
import Content from "./content/Content";

import DetailDardLord from "./content/detailDarklord/DetailDardLord";
import DetailBedsit from "./content/detailBedsit/DetailBedsit";

import { Routes, Route } from "react-router-dom";
const Index = () => {
	return (
		<React.Fragment>
				<Grid container>
					<Grid container>
						<Header />
					</Grid>
					<Grid container>
					<Routes>
						<Route path="/" element={ <Content /> } />
						<Route path="/dardlord" element={ <DetailDardLord />} />
						<Route path="/bedsit" element={ <DetailBedsit />} />
					</Routes>
					</Grid>
				</Grid>
			</React.Fragment>
	);
};

export default Index;
