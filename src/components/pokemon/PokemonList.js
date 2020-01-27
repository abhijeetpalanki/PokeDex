import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

export class PokemonList extends Component {
	state = {
		url: 'https://pokeapi.co/api/v2/pokemon/',
		pokemons: []
	};

	async componentDidMount() {
		const res = await axios.get(this.state.url);
		this.setState({ pokemons: res.data.results });
	}

	render() {
		if (this.state.pokemons.length > 0) {
			return (
				<div className="row">
					{this.state.pokemons.map((pokemon, index) => (
						<PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
					))}
				</div>
			);
		} else {
			return <h1>Loading Pokemon</h1>;
		}
	}
}

export default PokemonList;
