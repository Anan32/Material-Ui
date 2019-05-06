import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Bodymenu from "./bodymenu"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

class Menu extends Component {
  state = {
    barang : [],

  cards : [
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
],
total:0
}

tambahtotalHarga= (price , card) =>{
  this.setState({
      total: this.state.total + price,
      barang:this.state.barang.concat(card)
  });
  sessionStorage.total = this.state.total + price;
};

kurangtotalHarga= (price, card) =>{
  this.setState({
      total: this.state.total - price,
      barang:this.state.barang.filter(l=>l.id !== card.id)
  });
  sessionStorage.total = this.state.total - price;
}


render () {
  const { classes } = this.props;
  return (
    <div align="center">
        <Grid container spacing={24}>
        <Grid item xs={12}>
            {this.state.cards.map((card) => 
              <Bodymenu
                card={card}
                tambahTotalHarga={this.tambahtotalHarga}
                kurangTotalHarga={this.kurangtotalHarga}
                cards={this.state.cards}
              />
            )}
          </Grid>
        </Grid>
        <Paper className={classes.paper} elevation={1}>
        <h3>Total Harga:</h3>
              <h4>Rp.{this.state.total}</h4>
        <Button variant="contained" style={{backgroundColor:"green"}} color="primary" href="/proses">
            Check Out
        </Button>
        </Paper>
    </div> 
  );
}
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Menu);