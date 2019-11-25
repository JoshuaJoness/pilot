import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios'
import qs from 'qs'

const successPayment = data => {
  alert('Payment Successful');
};
const errorPayment = data => {
  alert('Payment Error');
};

class CheckoutForm extends Component {
	submit = (e) => {
		e.preventDefault()
		let appointment = this.props.appointment
		let token = this.props.stripe.createToken({}).then(token => {
			console.log('TOKEN',token.token.id)
			axios.post(`${process.env.REACT_APP_API}/booking`, {
  			data:
    		token,
				appointment
			}).then(res=>{console.log(res.data);}).catch(err=>{})
	})
}
  render() {
		const styles = {
			form: {
				width: '400px',
				height: '500px',
				backgroundColor: 'white',
				paddingTop: '5%',
				paddingLeft: '2.5%',
				paddingRight: '2.5%',
				borderRadius: '5%'
			},
			cardElement: {
				border: '1px solid black'
			}
		}
    return (
			<center>
      <form onSubmit={this.submit}>

        <CardElement style={styles.cardElement}/>
        <button>Purchase</button>
      </form>
			</center>
    )
  }
}

export default injectStripe(CheckoutForm);
