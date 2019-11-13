//implement Stripe
import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateTimePicker from 'react-datetime-picker';
import '../styles/booking.css'

class Booking extends React.Component {

	submitForm = () =>{
		//update state with appointment information, send information via email (or other means to drivers), drivers can then respond via email to confirm booking.

		//pushes to Stripe page where user can then pay for purchase via Stripe form

		//may be inconvenient at first, but shit will grow if you can prove a business model, ie. IF there were more available drivers (Uber Partnership? OR if there were independent contracter teams, MARKET TOWARDS DRIVERS, ie new way of working, work together, pair work)
		console.log('hello');
	}

	render(){
		return(
			<>
				<center>
					<h1>Book Now!</h1>
				</center>
				<center>
					<form className='form'>
					<p>Fill in the form below to get started:</p>
			         <TextField
			           id="outlined-basic"
			           label="First name"
			           margin="normal"
			           variant="outlined"
			         />
							 <br/>
							 <TextField
								 id="outlined-basic"
								 label="Last name"
								 margin="normal"
								 variant="outlined"
							 />
							 <br/>
							 <TextField
								 id="outlined-basic"
								 label="Pick-up address"
								 margin="normal"
								 variant="outlined"
							 />
							 <br/>
							 <TextField
								 id="outlined-basic"
								 label="Drop-off address"
								 margin="normal"
								 variant="outlined"
							 />
							 <br/>
							 <br/>
							  <TextField
							    id="datetime-local"
							    label="Date of pickup"
							    type="date"
							    defaultValue={Date.now()}

							    InputLabelProps={{
							      shrink: true,
							    }}
							  />
								<br/>
								<br/>
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
							  />
								<br/>
								<br/>
								<br/>
								<Button variant="outlined" onClick={this.submitForm}>
									Submit
								</Button>
					</form>
				</center>
			</>
		)
	}
}

export default Booking
