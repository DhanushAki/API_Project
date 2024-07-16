import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: 'inherit',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  footerTitle: {
    color: '#1a237e',
    fontWeight: 'bold',
  },
  footerDescription: {
    listStyle: 'none',
	color: 'white',
    paddingLeft: 0,
    '& li': {
      marginBottom: theme.spacing(0.5),
    },
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" align="center" color = "blue">
      {'Copyright © '}
      <Link color = "blue" href="https://dhanush-bharath-raj-fe2ed3.netlify.app/">
        My Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'Dhanush',
    description: ['Full Stack Developer', 'Front End', 'Back-End', 'Software Engineer'],
  },
  {
    title: 'Skills',
    description: [
      'Full Stack',
      'Front End',
      'Back-End',
      'Data Analysis',
    ],
  },
  {
    title: 'Experience',
    description: [
      '2 Years - Full-Stack',
      '1 Year - Intern',
      '2 Years - Research Assistant',
      '1 Year - Teaching Assistant',
    ],
  },
  {
    title: 'Education',
    description: ['Bachelors', 'Masters'],
  },
];

function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={12} sm={3} key={footer.title}>
              <Typography variant="h5" className={classes.footerTitle} gutterBottom>
                {footer.title}
              </Typography>
              <ul className={classes.footerDescription}>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" className={classes.footerLink}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Footer;
