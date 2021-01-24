import React from 'react';
import Card from './Card'

function CardsList(props){
    return(
        <div>
            { props.profiles.map(profile => <Card {...profile} /> )}
        </div>
    )
}

export default CardsList;