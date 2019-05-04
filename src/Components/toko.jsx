import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
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
      width: 1200,
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
             nama:"KFC",
             gambar:"https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/yum-blames-flat-same-store-sales-kfc-chicken-shortage_0.gif?itok=m6BfVdAf",
             link:"/menu"
         },
         {
            nama:"Pizza Hut",
            gambar:"http://www.hospitalityandcateringnews.com/wp-content/uploads/2016/09/pizza-hut-restaurants-unveils-major-refurbishment-for-bristol-restaurant-2.jpg",
        },
        {
            nama:"Burger King",
            gambar:"http://student.blog.dinus.ac.id/menu/wp-content/uploads/sites/5999/2018/04/Richeese-Factory.jpg",
        },
        {
            nama:"MCD",
            gambar:"https://www.mwakilishi.com/sites/default/files/styles/large/public/2017-12/McDonalds.jpg?itok=rCmOFsUU",
        },
  
];

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={6} lg={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    width={100}
                    image={card.gambar} // eslint-disable-line max-len
                    title={card.nama}
                  />
                  <br></br>
                  <div align="center">
                  <Button variant="contained" style={{backgroundColor:"green"}} color="primary" href={card.link}>
                    {card.nama}
                  </Button>
                  </div>
                  <br></br>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired, 
};

export default withStyles(styles)(Album);