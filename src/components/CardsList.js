import React from 'react';
import Card from './Card'


const testData = [
    {
    name: "Tom Preston-Werner",
    avatar_url:"https://avatars.githubusercontent.com/u/2?v=4",
    company:"@chatterbugapp, @redwood…reston-werner-ventures "
    },
    {
        name: "PJ",
        avatar_url:"https://avatars.githubusercontent.com/u/3?v=4",
        company:"@Github "
    },
    {
        name: "Ryu kde",
        avatar_url:"https://avatars.githubusercontent.com/u/38?v=4",
        company:"@chatreston-werneures "
    }    
];

function CardsList(){
    return(
        <div>
            { testData.map(profile => <Card {...profile} /> )}
        </div>
    )
}

export default CardsList;