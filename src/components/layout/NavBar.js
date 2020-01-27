import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-danger bg-danger fixed-top">
					<span className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center text-light">PokeDex</span>
				</nav>
			</div>
		);
	}
}

export default NavBar;
