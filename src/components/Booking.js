import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import DateTimePicker from 'react-datetime-picker';
import StripeCheckout from 'react-stripe-checkout';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import axios from 'axios'
import '../styles/booking.css'

class Booking extends React.Component {

	state={
		appointment:{}
	}

	changeField (e, field){
		let appointment = this.state.appointment
		appointment[field] = e.target.value
		this.setState({appointment})
		console.log(this.state.appointment);
	}



	render(){
		return(
			<>
				<center>
					<h1>Book Below</h1>
				</center>
				<div className='bookingFormContainer'>
					<img src='./driving.jpeg'></img>
					<center>
						<form className='form' onSubmit={this.submitForm}>
							<p>Fill in the form below to get started:</p>

							<div className = 'inputContainer'>
								<div>
			         		<TextField
			           		id="outlined-basic"
			           		label="First name"
			           		margin="normal"
			           		variant="outlined"
								 		onInput={(e)=>this.changeField(e, 'firstName')}
										className='input'
			         		/><br/>
							 		<TextField
								 		id="outlined-basic"
								 		label="Last name"
								 		margin="normal"
								 		variant="outlined"
								 		onInput={(e)=>this.changeField(e, 'lastName')}
							 		/><br/>
							 		<TextField
								 		id="outlined-basic"
								 		label="Phone number"
								 		margin="normal"
								 		variant="outlined"
								 		onInput={(e)=>this.changeField(e, 'number')}
							 		/><br/>
								</div>
								<div>
							 		<TextField
								 		id="outlined-basic"
								 		label="E-mail"
								 		margin="normal"
								 		variant="outlined"
								 		onInput={(e)=>this.changeField(e, 'email')}
							 		/><br/>
							 		<TextField
								 		id="outlined-basic"
								 		label="Pick-up address"
								 		margin="normal"
								 		variant="outlined"
								 		onInput={(e)=>this.changeField(e, 'pickUpAddress')}
							 		/><br/>
							 		<TextField
								 		id="outlined-basic"
								 		label="Drop-off address"
								 		margin="normal"
								 		variant="outlined"
								 		onInput={(e)=>this.changeField(e, 'dropOffAddress')}
							 		/>
								</div>
							</div><br/><br/>
							<div className='dateAndTimeContainer'>
								<div>
							  	<TextField
							    	id="datetime-local"
							    	label="Date of pickup"
							    	type="date"
							    	defaultValue={Date.now()}
										onInput={(e)=>this.changeField(e, 'dateOfPickUp')}
							    	InputLabelProps={{
							      	shrink: true,
							    	}}
							  	/><br/><br/>
								</div>
								<div>
									<TextField
							    	id="time"
							    	label="Pick-up time"
							    	type="time"
							    	defaultValue="09:00"
							    	InputLabelProps={{
							      	shrink: true,
							    	}}
							    	inputProps={{
							      	step: 300, // 5 min
							    	}}
										onInput={(e)=>this.changeField(e, 'timeOfPickUp')}
							  	/><br/><br/><br/><br/>
								</div>
							</div>
								<FormLabel component="legend">By checking this box you agree to our terms and conditions</FormLabel>
								<Checkbox
									value="checkedC"
									inputProps={{
										'aria-label': 'uncontrolled-checkbox',
									}}
									required="true"
								/>
								<a href="/">Terms and Conditions</a>
								<br/><br/><br/><br/>
								<StripeProvider apiKey='pk_test_hxQO4xYhhgk3EdVhJ145q8Zv00HkUuTnRy' >
								<div className="example">
									<div className='stripe-form'>
									<div></div>
									<Elements>
										<CheckoutForm appointment={this.state.appointment} />
									</Elements>
									<div></div>
									</div>
								</div>
							</StripeProvider>
							<br/><br/>
						</form>
					</center>
				</div>
			</>
		)
	}
}

export default Booking
