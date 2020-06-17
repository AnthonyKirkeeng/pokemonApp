import React from 'react';
import './App.css';
import SearchPokemon from './SearchPokemon'
import Pokemon from './Pokemon'

class App extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
        pokemonData: {},
        name: this.props.name
    };

};

componentDidMount() {
    let pokemonArray = []
    for (let i = 0; i < 151; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(result => result.json())
    .then(data => pokemonArray.push(data) );
    }
    this.setState({pokemonData: pokemonArray})
}


render() {
  
  return (
        <div className="App">
          <header className="App-header">
          <nav>
            <h1>hi</h1>
            <h1>{this.state.pokemonData[0]}</h1>
          </nav>
          <SearchPokemon data={this.state.pokemonData}/>
          {/* <GetPokemon name={'squirtle'}/> */}
          </header>
        </div>
      );
}
}

export default App

