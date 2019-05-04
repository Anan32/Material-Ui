import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 360
  },
  image: {
    width: 158,
    height: 158
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

const cards = [
  {
    id: 1,
    number: 0,
    price: 24000,
    nama: "Super Mantap",
    gambar: "http://www.kfcku.com/assets/gallery/1411958697.png"
},
{
    id: 2,
    number: 0,
    price: 8000,
    nama: "Fish Fillet",
    gambar: "http://www.kfcku.com/assets/gallery/1361800185.jpg"
},
{
    id: 3,
    number: 0,
    price: 8000,
    nama: "Twisty",
    gambar: "http://www.kfcku.com/assets/gallery/1361800286.jpg"
},
{
    id: 4,
    number: 0,
    price: 9000,
    nama: "Pepsi Can",
    gambar: "http://www.kfcku.com/assets/gallery/1361806304.jpg"
},
{
    id: 5,
    number: 0,
    price: 9000,
    nama: "Hazelnut Coffe",
    gambar: "http://www.kfcku.com/assets/gallery/1361801273.jpg"
},
{
    id: 6,
    number: 0,
    price: 13000,
    nama: "Fresh Brewed Coffe",
    gambar: "http://www.kfcku.com/assets/gallery/1361801939.jpg"
},
];

function ComplexGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {cards.map(card => (
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Grid container spacing={16}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={card.gambar}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm>
                  <Grid item xs direction="column" spacing={16}>
                    <Grid item xs={12} sm container>
                      <h3 align="center" style={{ marginLeft: "10px" }}>
                        {card.nama}
                      </h3>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <p align="center" style={{ marginLeft: "10px" }}>
                        Rp {card.price}
                      </p>
                    </Grid>
                    <Grid item xs={12} sm container align="right">
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: "red" }}
                        className={classes.button}
                        size="small"
                      >
                        -
                      </Button>
                      <h3 style={{ margin: "10px" }}> 0 </h3>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: "green" }}
                        className={classes.button}
                        size="small"
                      >
                        +
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ComplexGrid);