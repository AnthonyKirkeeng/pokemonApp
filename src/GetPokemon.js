import React from 'react'
import Pokemon from './Pokemon'


class GetPokemon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pokemonData: {},
            name: this.props.name
        };
    
    };
    
    componentDidMount() {
        console.log('hello', this.state.name)
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
        .then(result => result.json())
        .then(data => this.setState({pokemonData: data}));
        
    }



    render() {
        if (!this.state.pokemonData['abilities']){
            return null
        }
        
        return (
            <div className='container'>
                <h2>{this.props.name}</h2>
                <Pokemon data={this.state.pokemonData} />
            </div>
        )
    }
}

export default GetPokemon;
