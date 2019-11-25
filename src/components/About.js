import React from 'react'
import '../styles/about.css'

class About extends React.Component{
	render(){
		return(
			<>
				<div className='aboutContainer'>


					<center>
						<h1>About</h1>
					</center>

					<div></div>

					<div className='descriptionContainer'>
						<div></div>
						<div className='aboutDescription'>
							You've got plans this Friday night. You want to drive downtown but you know you'll be drinking and you <b>don't</b> want to drive back while intoxicated.<br/><br/>
							Lucky for you, there's Pilot! When you book an appointment with us, a team will come to pick up both you and your car! One driver will drive you and your car home, and the other driver will follow in their car.<br/><br/>
							Be safe, use Pilot.


						How it works, you make an appointment with us. We take a payment. At appointed time, our team comes to pick up both you and your car. We drive you home safely.

						Agreement form, WAVE LIABILITY agreement on booking</div>
						<div></div>
					</div>

				</div>
				<img src='./about.jpeg' className='aboutImage'></img>
			</>
		)
	}
}

export default About
