import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios'
import qs from 'qs'
import '../styles/checkoutForm.css'

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
			}).then(res=>{console.log(res.data)}).catch(err=>{})
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
			},
			button:{
				width: '150px',
				height: '50px',
				borderWidth: '0',
				 outline: 'none',
				 borderRadius: '2px',

				 backgroundColor: '#DCD9DC',
				 color: '#D1969A',
				 fontFamily: 'Roboto',
				 fontSize: '1.7em',
				 marginLeft: '15%'
			},
			innerForm:{
				border: '1px solid grey',
				borderRadius: '6px',
				width: '100%',
				padding: '10%'
			},
			outerForm:{
				marginRight: '15%',
			}
		}
    return (
			<>
	      <form onSubmit={this.submit} style={styles.outerForm}>
					<div style={styles.innerForm}>
						<div></div>
	        	<CardElement style={styles.cardElement}/>
						<div></div>
					</div>
					<br/><br/>
	        <button style={styles.button} className='stripeButton'>Book Now</button>
	      </form>
			</>
    )
  }
}

export default injectStripe(CheckoutForm);
