import React from 'react'
import Pokemon from './Pokemon'

//SearchPokemon component used to render the page. Can either render off input data or by viewing all pokemon

class SearchPokemon extends React.Component
{ 
    constructor(props)
    {
        //passes all the properties down from the App.js file
        super(props)
        this.state = {  
                        //value is used to store the ID of the searched or selected pokemon
                        value: "",
                        //new value is used to store the input from the user in the text box to store into the value parameter
                        newValue: "",
                        //imgArr is used to store all the images called when viewing the Pokedex                      
                        imgArr: [],
                        //checkVal is used to determine what to render, based off the event that is processed.
                        checkVal: 0,
                    };

        //Not 100% sure what binding does, was in a guide. Seems to work without it.            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
    }
    
    //Handle change is called when the user inputs anything into the text box and stores data input by user, and updates the state value to be used by handleSubmit
    handleChange = (event) =>
    {
        //prevents page from reloading
        event.preventDefault();
        //sets the states newValue to the input box value
        this.setState({newValue: event.target.value})
    }

    //Handle Submit is called by the form submit button, and updates the value of the pokemon that will be called by storing either the name or number in the pokedex called. Also sets the checkVal to render  
    handleSubmit = (event) =>
    {
        event.preventDefault();
        //sets the state of value(the pokemons ID) to newValues, which was used to store the users input data.
        this.setState({value: this.state.newValue});
        //Check value 0 indicates you want to render a specific pokemon
        this.setState({checkVal: 0})
        //resets newValue to clear the text box
        this.setState({newValue: ''})
        
    }

    //handleAll is called when the user wants to view the full Pokedex. Handle all takes in an event on click of the View Pokedex button, then populates an array of images to be rendered that are stored in the ImgArr state property. These images are passed an onClick, that waits for the state to be rendered before they process their onClick event. When the user clicks on the image, they will be taken to the details page of the pokemon.
    handleAll = (event) => {
        event.preventDefault();
        //establishes an array to store all the pictures of the pokemon.
        let imgArray = []
        //iterates up to 152 times (the size of the original pokedex), and store's the images into the array with their propery HTML tags, and gives them an id based off their reference.
        for (let i = 1; i < 152; i++){
           
           //each image is sourced and given an ID, and an onclick event that will redirect the render to the selected pokemon.
            imgArray.push(<img src={`https://pokeres.bastionbot.org/images/pokemon/${i}.png`} className='random-poke' id={`${i}`} onClick={this.handleImg}></img>)}

        this.setState({imgArr: imgArray})
        //checkVal one will render the img array to the page
        this.setState({checkVal: 1})
        this.setState({newValue: ''})   
    }

    //this method is called when an image is clicked. It checks if the state is loaded, then on click, will set your value to the id assigned in the imgArr push and allow the page to render an individual pokemon via the checkVal argument.
    handleImg = (event) => {
        
        //if the state exists, change these state values
        if(this.state){
            //sets the value to the specific ID of the target img
        this.setState({value: event.target.id})
        this.setState({checkVal: 0})
        //clears the user input box
        this.setState({newValue: ''})
        }
    }
    
    render() {
        
        //establishes a variable used to store the data to render
        let returnData
        
        //if the value is 0 (User either submitted a request in the form, or selected a picture, renders the specific pokemon targeted.)
        if (this.state.checkVal === 0){
            returnData = <Pokemon data={this.state.value.toLowerCase()} />
        }
        //if the value of checkVal is 0, user selected View Pokedex, and will render the imgArray with all of the pictures.
        if (this.state.checkVal === 1){
            returnData = this.state.imgArr
        }

        
        return (
          //container for the page
          <div className='page'>
            {/* container for the top bar */}
            <nav className='top-bar'>
                <h1>Pokédex</h1>
                {/* On click, will display the pokedex by calling the handleAll method */}
                <button onClick={this.handleAll}>View Pokédex</button>
                {/* Upon submitting the user input, will call the handleSubtmit function, displaying the individual pokemon */}
                <div className="search">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        <textarea value={this.state.newValue} 
                        //onChange stores the present value, as the user types in the submit box
                        onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Search"  />
                    </form>
                </div>
                
            </nav>
            
          <div className='container'>
            Who's that Pokémon?!
            <p></p>
                {/* The returned information was stored in the returnData variable, based off of the checkVal state, that was updated by the method calls. The page will render whatever data has been specified by the user input */}
                {returnData}
            </div>
          </div>
        );
    }
}

export default SearchPokemon