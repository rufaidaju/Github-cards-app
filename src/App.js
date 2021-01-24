import React from 'react';
import './App.css';
import Form from './components/Form'
import CardsList from './components/CardsList';

class App extends React.Component {
  state = {
    cardList: []
  }

  addProfileToCardsList = (newProfile) => {
    this.setState((prevState) => ({
      cardList: [...prevState.cardList, newProfile]
     })
    )
  }

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addProfileToCardsList} />
        <CardsList profiles={this.state.cardList} />
      </div>
    )
  }
}

export default App;
