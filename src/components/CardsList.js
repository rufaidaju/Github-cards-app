import React from 'react';
import Card from './Card';
import '../App.css';


function CardsList(props){
    return(
        <div className="card-list"> 
            { props.profiles.map(profile => <Card key={profile.id} {...profile} /> )}
        </div>
    )
}

export default CardsList;