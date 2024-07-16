// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
// 	appBar: {
// 		borderBottom: `1px solid ${theme.palette.divider}`,
// 	},
// }));

// function Header() {
// 	const classes = useStyles();
// 	return (
// 		<React.Fragment>
// 			<CssBaseline />
// 			<AppBar
// 				position="sticky"
// 				color="primary"
// 				elevation={4}
// 				className={classes.appBar}
// 			>
// 				<Toolbar>
// 					<Typography variant="h6" color="inherit" noWrap>
// 						Simple API Calls
// 					</Typography>
// 				</Toolbar>
// 			</AppBar>
// 		</React.Fragment>
// 	);
// }

// export default Header;




import React from 'react';
import { AppBar, Toolbar, Typography, Button, CssBaseline, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: '#1a237e', // Custom background color
		borderBottom: `1px solid ${theme.palette.divider}`,
		padding: theme.spacing(1), // Add padding for spacing
	},
	title: {
		flexGrow: 1, // Pushes other items to the end
		fontFamily: 'Roboto, sans-serif', // Custom font
		fontWeight: 700, // Bold font
	},
	button: {
		marginLeft: theme.spacing(2), // Margin for spacing between buttons
		color: '#fff', // Custom button text color
	},
	iconButton: {
		marginRight: theme.spacing(2), // Margin for spacing
		color: '#fff', // Custom icon color
	},
}));

function Header() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="sticky" elevation={4} className={classes.appBar}>
				<Toolbar>
					<IconButton edge="start" className={classes.iconButton} aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title} noWrap>
						Simple API Calls
					</Typography>
					<Button className={classes.button}>Home</Button>
					<Button className={classes.button}>About</Button>
					<Button className={classes.button}>Contact</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Header;
