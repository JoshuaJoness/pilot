import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Booking from './Booking'
import Contact from './Contact'
import Mobile from './Mobile'
import About from './About'
import Home from './Home'

class Routes extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<Switch>

					<Route path='/' component={Mobile}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routes
