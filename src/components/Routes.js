import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Booking from './Booking'
import Contact from './Contact'
import About from './About'
import Home from './Home'

class Routes extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/booking' component={Booking}></Route>
					<Route path='/contact' component={Contact}></Route>
					<Route path='/about' component={About}></Route>
					<Route path='/' component={Home}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
