import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [
  {
    nama:"GO-FOOD",
    gambar:"https://www.dictio.id/uploads/db3342/original/3X/4/f/4f87734ed4008ba168765b3a4dfa8262527a4ebf.png",
    link:"/restaurant"
    
},
{
    nama:"GO-CAR",
    gambar:"https://gojekuph.files.wordpress.com/2016/10/go-mart.png?w=1040"
},
{
    nama:"GO-BOX",
    gambar:"https://empireparfume.files.wordpress.com/2016/11/01-go-send.png"
},
{
    nama:"GO-TIX",
    gambar:"https://gojekguide.files.wordpress.com/2017/01/82e29-cara-pesan-gojek-goride.png?w=739"
},
];

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <hr color="black"></hr>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              GO-JEK IS READY TO DELIVER FROM SABANG TO MERAUKE
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <hr color="black"></hr>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} xs={6} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.gambar} // eslint-disable-line max-len
                    title={card.nama}
                  />
                  <br></br>
                  <div align="center">
                  <Button variant="contained" style={{backgroundColor:"green"}} color="primary" href={card.link}>
                    Start
                  </Button>
                  </div>
                  <br></br>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          #Lifewithoutlimits
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);