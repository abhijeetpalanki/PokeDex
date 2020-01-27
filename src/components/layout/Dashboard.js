import React, { Component } from 'react';
import PokemonList from '../pokemon/PokemonList';

export class Dashboard extends Component {
	render() {
		return (
			<div className="row">
				<div className="col">
					<PokemonList />
				</div>
			</div>
		);
	}
}

export default Dashboard;
