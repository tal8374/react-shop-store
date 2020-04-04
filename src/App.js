import React, { Component } from 'react';
import NavbarComponent from './containers/Navbar/NavbarComponent';
import Items from './containers/Items/Items';
import ConfirmOrder from './containers/ConfirmOrder/ConfirmOrder';
import ShoppingCart from './containers/ShoppingCart/ShoppingCart';
import './App.css';

// Import redux provider
import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100.0,
      taxes: 0,
      pickupSavings: -3.85,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }

  componentDidMount = () => {
    this.setState(
      { taxes: (this.state.total + this.state.pickupSavings) * 0.0875 },
      function () {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState(
        { estimatedTotal: this.state.estimatedTotal * 0.9 },
        function () {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };

  render() {
    return (
      <div>
        <NavbarComponent></NavbarComponent>
        {/* <Items></Items> */}
        <ConfirmOrder></ConfirmOrder>
        {/* <ShoppingCart></ShoppingCart> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {
  handleChange
})(App);
