import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from 'logo.svg';

const Header = () => (
  	<header className="App-header">
	  <img src={ logo } className="App-logo" alt="logo" />
	  <h1 className="App-title">Welcome to React</h1>
	  <nav>
		  <NavLink to="/" exact activeClassName="active">Home</NavLink>
		  <NavLink to="/auth/login" activeClassName="active">Login</NavLink>
		  <NavLink to="/auth/access" activeClassName="active">Products</NavLink>
		</nav>
		<p className="App-intro">
		  To get started, edit <code>src/App.js</code> and save to reload.
		</p>
	</header>
)

export default Header