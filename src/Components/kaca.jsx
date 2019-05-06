import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class Kaca extends Component {

  componentDidMount(){
    var x = sessionStorage.total;
    document.getElementById('totalHarga').innerHTML = x;
  }

  render () {
  const { classes } = this.props;

  return (
    <div>
    <h3>Keranjang Makanan:</h3>
    <hr></hr>
    <ul>
        <li id="totalHarga"></li>  
    </ul>
    <div  align="center">
        <Typography variant="h5" component="h3">
        <Button variant="contained" style={{backgroundColor:"green"}} color="primary" href="/pembayaran">
            Bayar Sekarang
        </Button>
        </Typography>
        </div>
    </div>
  );
}
}
Kaca.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Kaca);