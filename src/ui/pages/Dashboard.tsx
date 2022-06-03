import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const DashBoard = () => {
	return (
		<Container component={'section'}>
			<Grid container alignItems={'center'} justifyContent={'center'}>
				<Typography align={'center'} variant={'h4'} component={'h2'}>
					Добро пожаловать в Личный кабинет!
				</Typography>
			</Grid>
		</Container>
	);
};
export default DashBoard;
