import React from 'react'
import Pokemon from './Pokemon'

class SearchPokemon extends React.Component
{ 
    constructor(props)
    {
        super(props)
        this.state = { value: "",
                        newValue: "",
                        newData: {},
                        imgArr: [],
                        checkVal: 0,
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
        this.setState({checkVal: 0})
        this.setState({newValue: ''})
        
    }
    handleAll = (event) => {
        event.preventDefault();
        let imgArray = []
        for (let i = 1; i < 152; i++){
           imgArray.push(<img src={`https://pokeres.bastionbot.org/images/pokemon/${i}.png`} className='random-poke' id={`${i}`} onClick={this.handleImg}></img>)}

        this.setState({imgArr: imgArray})
        this.setState({checkVal: 1})
        this.setState({newValue: ''})   
    }

    handleImg = (event) => {
        if(this.state){
        this.setState({value: event.target.id})
        this.setState({checkVal: 2})
        this.setState({newValue: ''})
        }
    }
    
    render() {
        let returnData
        
        if (this.state.checkVal === 0){
            returnData = <Pokemon data={this.state.value.toLowerCase()} />
        }
        if (this.state.checkVal === 1){
            returnData = this.state.imgArr
        }
        
        
        if (this.state.checkVal === 2){
            returnData = <Pokemon data={this.state.value.toLowerCase()} />
        }
        
        return (
          <div>
            Who's that Pokémon?!
            <p></p>
            <form onSubmit={this.handleSubmit}>
                <label>
                <textarea value={this.state.newValue} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit"  />
            </form>
            <button onClick={this.handleAll}>View Pokédex</button>
            <p></p>
          <div className='container'>
                {returnData}
            </div>
          </div>
        );
    }
}

export default SearchPokemon