import React, { useState, useEffect } from 'react'


function Pokemon(props)
{
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.data}`)
    .then(result => result.json())
    .then(setPokemon);
    })
    
    let imgSrc = "https://pokeres.bastionbot.org/images/pokemon/" + pokemon['id'] + '.png'
    if (!pokemon['abilities']){
            return null
        }

    let types = pokemon['types'].map(types => <li>{types['type']['name'][0].toUpperCase() + types['type']['name'].slice(1)}</li>)  
    let abilities = pokemon['abilities'].map(ability => <li>{ability['ability']['name'][0].toUpperCase() + ability['ability']['name'].slice(1)}</li>)


    return(
        <div className="info">
            <h1>It's {pokemon['name'][0].toUpperCase() + pokemon['name'].slice(1)}!</h1>
            <p></p>
            {<img src={imgSrc} id='pokemon-img'></img>}
            <ul>Abilities:               
                {abilities}
            </ul>
            <ul>
                Type(s)               
                {types}
            </ul>

        </div>
    )
    
}

export default Pokemon