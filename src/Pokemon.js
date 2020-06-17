import React, { useEffect } from 'react'

function Pokemon(props)
{

    
    let imgSrc = "https://pokeres.bastionbot.org/images/pokemon/" + props.data['id'] + '.png'

    return(
        <div className="info">
            <img src={imgSrc} className='img'></img>
            <ul>
                Abilities 
                <li>{props.data['abilities'][0]['ability']['name']}</li>
                <li>{props.data['abilities'][1]['ability']['name']}</li>
            </ul>
            <ul>
                Type(s)
                <li>{props.data['types'].map(types => types['type']['name'][0].toUpperCase() + types['type']['name'].slice(1) + ' ')}</li>
                
                

            </ul>
        </div>
    )
    
}

export default Pokemon