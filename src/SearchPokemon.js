import React from 'react'
import Pokemon from './Pokemon'

class SearchPokemon extends React.Component
{ 
    constructor(props)
    {
        super(props)
        this.state = { value: "",
                        newValue: "",
                        newData: {}
                    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    

    handleChange = (event) =>
    {
        event.preventDefault();
        this.setState({newValue: event.target.value})
    }

    handleSubmit = (event) =>
    {
        event.preventDefault();
        this.setState({value: this.state.newValue});
    }
    
    

    render() {


        return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Who's that Pokemon?!
                <p></p>
                <textarea value={this.state.newValue} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit"  />
            </form>
            
          <div className='container'>
                <h2>{this.props.name}</h2>
                <Pokemon data={this.state.value.toLowerCase()} />
            </div>
          </div>
        );
    }
}

export default SearchPokemon