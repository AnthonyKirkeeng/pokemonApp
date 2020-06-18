import React from 'react';
import './App.css';
import SearchPokemon from './SearchPokemon'

//constructs the app class and calls SearchPokemon to render the page.
class App extends React.Component
{
  constructor(props){
    super(props);
};


render() {
  
//Establishes the App container; populated by SearchPokemon
  return (
        <div className="App">
          <header className="App-header">
          <SearchPokemon />
          </header>
        </div>
      );
}
}

export default App

