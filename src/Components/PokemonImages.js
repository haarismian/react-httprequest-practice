import React from 'react';

export default class PokemonImages extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonName: '',
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ pokemonName: result.species.name });
        },
        (error) => {
          this.setState({ pokemonName: error });
        }
      );
  }
  render() {
    return <h1>{this.state.pokemonName}</h1>;
  }
}
