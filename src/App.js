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


render() {
  

  return (
        <div className="App">
          <header className="App-header">
          <nav>
            <h1>hi</h1>
           
          </nav>
          <SearchPokemon data={this.state.pokemonData}/>
          
          
          </header>
        </div>
      );
}
}

export default App

