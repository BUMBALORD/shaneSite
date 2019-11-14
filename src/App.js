
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Image from 'material-ui-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import one from './pics/1.jpg'
import two from './pics/2.jpg'
import three from './pics/3.jpg'
import four from './pics/4.jpg'
import five from './pics/5.jpg'
import six from './pics/6.jpg'
import seven from './pics/7.jpg'
import eight from './pics/8.jpg'
import nine from './pics/9.jpg'
import ten from './pics/10.jpg'
import twelve from './pics/12.jpg'
import thirteen from './pics/13.jpg'
import fourteen from './pics/14.jpg'
import fifteen from './pics/15.jpg'

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0
};

const center = {
  margin: "0 auto"
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{color: 'white'}}>
      {'Copyright © '}
      <Link color="inherit" href="https://shanehallinan.com/">
        Shane Hallinan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  spacing: {
    marginTop: 15 
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// const cards = [1, 2, 3];

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main style={{backgroundColor: 'black'}}>
        {/* Hero unit */}
        <div className={classes.heroContent} style={{backgroundColor: 'black'}}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" style={{color: '#CFD8DC'}} gutterBottom>
              Shane Hallinan
            </Typography>
            {/* <hr /> */}
            <Typography variant="h5" align="center" color="textSecondary" style={{color: '#CFD8DC', marginTop: 10}} paragraph>
                I have photographed the girls I grew up with, both family and friends for most of my life. The process of photography was always intuitive and compulsive for me -- I brought my 35mm camera everywhere and tried to record what I was seeing. The women in my photographs are both the same strong women I grew up with and archetypes of the journey from youth to adult. Now they act as reminders of age and the inevitable progress of time.
            </Typography>
            {/* <hr /> */}
            <Container maxWidth="xs" style={{marginTop: 10}}>
            <Typography variant="h4" align="center" color="textSecondary" style={{color: '#CFD8DC'}} paragraph>
                Contact Me:
            </Typography>
        <List style={flexContainer}>
          <ListItem>
            <Link href="mailto:shanehallinan510@gmail.com" style={center}>
              <FontAwesomeIcon 
                icon={faEnvelope} 
                size="4x"
              />
            </ Link>  
          </ ListItem>
          <ListItem>
            <Link href="tel:510-847-3870" style={center}>
              <FontAwesomeIcon 
                icon={faPhone} 
                size="4x"
              />
            </ Link>  
          </ ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/shane_hallinan_photo/" style={center}>
              <FontAwesomeIcon 
                icon={faInstagram} 
                size="4x"
              />
            </ Link>  
          </ ListItem>
        </ List>
        </Container>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md" style={{backgroundColor: 'black'}}>
          {/* End hero unit */}
          <Image src={one} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
          <Image src={two} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
          <Image src={three} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
          <Image src={four} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
          <Image src={five} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
          <Image src={six} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
          <Image src={seven} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
          <Image src={twelve} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
          <Image src={thirteen} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
          <Image src={fourteen} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
          <Image src={eight} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
          <Image src={nine} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
          <Image src={ten} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
          <Image src={fifteen} aspectRatio="(5/3)" className={classes.spacing} style={{backgroundColor: 'black'}} />
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer} style={{backgroundColor: 'black'}} >
        {/* <Container maxWidth="xs">
        <List style={flexContainer}>
          <ListItem>
            <Link href="https://www.instagram.com/shane_hallinan_photo/" style={center}>
              <FontAwesomeIcon 
                icon={faInstagram} 
                size="8x"
              />
            </ Link>  
          </ ListItem>
        </ List>
        </Container> */}
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default App;
