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
        }
];

function CardsList(){
    return(
        <div>
            <Card {...testData[0]}/>
            <Card {...testData[1]}/>
        </div>
    )
}

export default CardsList;