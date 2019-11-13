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
						<h1>We are Pilot.</h1>
					</div>
				</div>
				<div className='secondContainer'>
					<h1>We provide a pick-up and drop-off service to get you and your car home safe.</h1>
				</div>

			</>
		)
	}
}

export default Home;
