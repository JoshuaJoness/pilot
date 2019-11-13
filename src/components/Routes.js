import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Booking from './Booking'
import Home from './Home'

class Routes extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<Switch>
					<Route path='/booking' component={Booking}></Route>
					<Route path='/' component={Home}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
