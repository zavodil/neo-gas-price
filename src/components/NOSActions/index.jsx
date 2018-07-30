import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { injectNOS, nosProps } from "@nosplatform/api-functions/lib/react";
import axios from 'axios'

const styles = {
  button: {
    margin: "16px",
    fontSize: "14px"
  }
};

class NOSActions extends React.Component {
  handleAlert = async func => alert(await func);
  
  NeoPrice = async func => { 

    return axios.get('https://api.coinmarketcap.com/v2/ticker/1376/').then(res => {
	  const price = res['data']['data']['quotes']['USD']['price']
	  //const res_text = JSON.stringify(res)  
	  alert("Current NEO price: $"+price);
    })
  }
  
  GasPrice = async func => { 

    return axios.get('https://api.coinmarketcap.com/v2/ticker/1785/').then(res => {
	  const price = res['data']['data']['quotes']['USD']['price']
	  //const res_text = JSON.stringify(res)  
	  alert("Current GAS price: $"+price);
    })
  }  

/**
 * Main
 */

  // handleGetAddress = async () => alert(await this.props.nos.getAddress());

  handleClaimGas = () =>
    this.props.nos
      .claimGas()
      .then(alert)
      .catch(alert);

  render() {
    const { classes, nos } = this.props;

    const neo = "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
    const gas = "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
    const rpx = "ecc6b20d3ccac1ee9ef109af5a7cdb85706b1df9";

    // Add your smart contract's scriptHash here
    const scriptHash = "";

    // The operation of your smart contract you want to (test)invoke
    const operation = "";

    // The necessary arguments for you (test)invoke
    const args = [];

    // The storagekey you want to query
    const key = "";

    // The asset, amount and receiver of your send function
    const receiver = "";
    const amount = "";
    const asset = gas;

    const invoke = { scriptHash, operation, args }; // and testInvoke
    const getStorage = { scriptHash, key };
    const send = { amount, asset, receiver };
	
	
	

    return (
      <React.Fragment>
		<button className={classes.button} onClick={() => this.NeoPrice()
		
		}>
          Neo Price
        </button>
		
		<button className={classes.button} onClick={() => this.GasPrice()
		
		}>
          Gas Price
        </button>
		       
      </React.Fragment>
    );
  }
}

NOSActions.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  nos: nosProps.isRequired
};

export default injectNOS(injectSheet(styles)(NOSActions));
