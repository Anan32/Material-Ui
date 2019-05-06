import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from "@material-ui/core/Button";


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 500
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

class Bodymenu extends Component {
    state = {
        angka:0 
    };
    tambah = (harga, id) => {
        this.setState({
            angka: this.state.angka + 1
        });
        const x = this.props.cards.find(card => card.id === id);
        this.props.tambahTotalHarga(harga, x);
      };
    
      kurang = (harga, id) => {
        if (this.state.angka === 0) {
          return;
        }
        this.setState({
          angka: this.state.angka - 1
        });
        const x = this.props.cards.find(card => card.id === id);
        this.props.kurangTotalHarga(harga, x );
      };

render () {
  const { gambar, nama, price } = this.props.card
  const { classes } = this.props;
  return (
    <div className={classes}>
    <Grid container spacing={24}>
    <Grid item xs={12} >
    <Paper className={classes.paper}>
      <Grid container spacing={16}>
        <Grid item>
        <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={gambar}
                    />
        </ButtonBase>
        </Grid>
        <Grid item xs={12} sm>
                  <Grid item xs direction="column" spacing={16}>
                    <Grid item xs={12} sm container>
                      <h3 align="center" style={{ marginLeft: "10px" }}>
                        {nama}
                      </h3>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <p align="center" style={{ marginLeft: "10px" }}>
                        Rp {price}
                      </p>
                    </Grid>
                    <Grid item xs={12} sm container align="right">
                      <Button onClick={()=>this.kurang(price)}
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: "red" }}
                        className={classes.button}
                        size="small"
                      >
                        -
                      </Button>
                      <h3 style={{ margin: "10px" }}> {this.state.angka} </h3>
                      <Button onClick={()=>this.tambah(price)}
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
          </Grid>
  </div>
  );
}
}


Bodymenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bodymenu);
