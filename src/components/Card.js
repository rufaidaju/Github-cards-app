import React from 'react';
import '../App.css';

class Card extends React.Component {
    render() {
        return (
            <div className="github-profile">
                <img src={this.props.avatar_url} alt="Profile" />
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="company">{this.props.company}</div>
                </div>
            </div>
        )
    }
}

export default Card;