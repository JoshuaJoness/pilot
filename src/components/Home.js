import React from 'react'
import '../styles/home.css'
import Nav from './Nav'

class Home extends React.Component {
	render(){
		const styles = {
				video: {
					height: '1000px',
					width: '100%'
				}
			}
		return (
			<>
				<div className='banner'>
					<video src='./driving.mp4' autoplay="" loop="loop" muted="muted"></video>
					<div className='content'>
						<h1 className='titleMobile'>Pilot.</h1>
						<h1 className='title'>We are Pilot.</h1>
					</div>
				</div>
				<div className='secondContainer'>
					<div></div>
					<div>
						<h1 className='description'>We provide a pick-up and drop-off service to get you and your car home safe.</h1>
						<p>How can we help you get started?</p>

						<center>
						<div className='cardContainer'>
							<a href='./about'><div className='cardOne'><p className='cardOneText'>How we work</p></div></a>
							<a href='./booking'><div className='cardTwo'><p className='cardTwoText'>Book now</p></div></a>
							<a href='./contact'><div className='cardThree'><p className='cardThreeText'>Contact</p></div></a>
						</div>
						</center>
					</div>
					<div></div>
				</div>

			</>
		)
	}
}

export default Home;
