import React from 'react'
import Particles from 'react-particles-js';
import Button from '@material-ui/core/Button';
import '../styles/mobile.css'

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import DateTimePicker from 'react-datetime-picker';
import StripeCheckout from 'react-stripe-checkout';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import axios from 'axios'

class Mobile extends React.Component{
	changeField (e, field){
		let appointment = this.state.appointment
		appointment[field] = e.target.value
		this.setState({appointment})
		console.log(this.state.appointment);
	}
	state={
		appointment:{}
	}
	render(){
		const styles = {
			nav: {
				visibility: 'visible',
				webkitTransform: 'translateY(0) scale(1)',
				opacity: 1,
				transform: 'translateY(0) scale(1)',
				opacity: 1,
				webkitTransition: '-webkit-transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s',
				transition: 'transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s'
			},
			particles:{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
			},
			button:{
				marginBottom: '30vh'
			}
		}
		return(
			<div className='mainWrapperInner'>
			<div className='containerOne'>
				<center className='pilotContainer'>
					<h1 className='pilotTitle'>
						Pilot
					</h1>
					<a href='booking'><button className='pilotButton'>Book Now</button></a>
				</center>
				<Particles style={styles.particles}
						params={{
							"particles": {
									"number": {
											"value": 50
									},
									"size": {
											"value": 3
									}
							},
							"interactivity": {
									"events": {
											"onhover": {
													"enable": true,
													"mode": "repulse"
											}
									}
							}
					}} />
					</div>
					<div className='containerTwo'>
						<center>
							<h1 className='containerTwoTitle'>
								About
							</h1>
							<div className='containerTwoDescriptionContainer'>
								<div></div>
								<p className='containerTwoDescription' data-aos="fade-right">
									You don't want to spend the money to Uber to that party downtown. You don't want to drink and drive either. You <i>do however want to get you and your car home safe.</i> <b>This is where we come in.</b><br/><br/>At Pilot, we provide a pick-up and drop-off service to get you and your car home safe!<br/><br/>Simply book an appointment using the form below. We'll send you a confirmation email and a team will be sent to you at your desired date and time!
								</p>
								<div></div>
							</div>
						</center>
					</div>

					<div className='containerThree' id='booking'>
						<center>
							<h1 className='containerThreeTitle'>
								Booking
							</h1>
							<form className='containerThreeForm' data-aos="fade-left">
								<p>Fill in the form below to get started:</p>
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
								/><br/>
								<TextField
									id="outlined-basic"
									margin="normal"
									variant="outlined"
									type='date'
									onInput={(e)=>this.changeField(e, 'dateOfPickUp')}
								/><br/>
								<TextField
									id="outlined-basic"
									margin="normal"
									variant="outlined"
									type='time'
									onInput={(e)=>this.changeField(e, 'timeOfPickUp')}
								/><br/><br/>

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
								</StripeProvider><br/><br/>
								<div className='checkboxLabel'>
									<div></div>
									<FormLabel component="legend">By submitting this form you agree to our <a href='/'>terms and conditions</a></FormLabel>
									<div></div>
								</div>
							</form>
						</center>
					</div>

					<div className='containerFour'>
						<center>
							<h1 className='containerFourTitle'>
								Contact
							</h1>
							<br/><br/>
							<div data-aos="fade-down">
								<label>Tel: </label>416-111-1111<br/><br/>
								<label>Email: </label>email@gmail.com
							</div>
						</center>
					</div>
			</div>
		)
	}
}

export default Mobile
