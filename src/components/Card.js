import React from 'react';

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

class Card extends React.Component{
    render(){
        return(
            <div className="github-profile" style={{backgroundColor:'red'}}>
                <img src={testData[0].avatar_url} alt="Profile image"/>
                <div className="info">
                    <div className="name">{'name'}</div>
                    <div className="company">{'Company'}</div>
                </div>
            </div>
        )
    }
}

export default Card;