import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sprite = styled.img`
	width: 5em;
	height: 5em;
`;

const Card = styled.div`
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
	-moz-user-select: none;
	-website-user-select: none;
	-user-select: none;
	-o-user-select: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export class PokemonCard extends Component {
	state = {
		name: '',
		imageUrl: '',
		pokemonIndex: ''
	};

	componentDidMount() {
		const { name, url } = this.props;
		const pokemonIndex = url.split('/')[url.split('/').length - 2];
		const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

		this.setState({ name, imageUrl, pokemonIndex });
	}

	render() {
		const { name, imageUrl, pokemonIndex } = this.state;

		return (
			<div className="col-md-3 col-sm-6 mb-5">
				<StyledLink to={`pokemon/${pokemonIndex}`}>
					<Card className="card">
						<h5 className="card-header">{pokemonIndex}</h5>
						<Sprite className="card-img-top rounded mx-auto mt-2" src={imageUrl} />
						<div className="card-body mx-auto">
							<h6 className="card-title">
								{name
									.toLowerCase()
									.split(' ')
									.map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
									.join(' ')}
							</h6>
						</div>
					</Card>
				</StyledLink>
			</div>
		);
	}
}

export default PokemonCard;
