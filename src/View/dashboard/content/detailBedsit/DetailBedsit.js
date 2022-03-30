import React from "react";
import { Grid, Box, CardMedia, Link, Container } from "@mui/material";
import DetailInfo from "./DetailInfo";
import LandLordInfo from "./LandLordInfo";
import Footer from "../../footer/Footer";
// import { Paper } from "@mui/material";
const DetailBedsit = () => {
	return (
		<React.Fragment>
			<Grid item xs={2} sx={{ background: '#e3f2fd'}} />
			<Grid item xs={8} height="100vh">
				<Box height="100vh" component="div" sx={{ p: 2, backgroundColor: "#e3f2fd" }}>
					<Grid container>
						<Grid item xs={12}>
							<Container align='left' >
								<Link variant='h6'  href="/">Home</Link> /
								<Link variant='h6' href="/landlord"> Dark lord</Link>
							</Container>
						</Grid>
						<Grid item xs={12}>
						</Grid>
						<Grid item xs={12}>
							<CardMedia component="img" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Paella dish" height="400" />
						</Grid>
						<Grid item md={8} xs={12}>
							<DetailInfo />
						</Grid>
						<Grid item md={4} xs={12}>
							<LandLordInfo />
						</Grid>
					</Grid>
				</Box>
			</Grid>
			<Grid item xs={2} sx={{ background: '#e3f2fd'}} />
			<Footer />
		</React.Fragment>
	);
};

export default DetailBedsit;
