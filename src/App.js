import React from 'react';
import './App.css';
import CardsList from './components/CardsList'

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

class App extends React.Component{
  render(){
    return(
    <div>
      <div className="header">{this.props.title}</div>
      <CardsList profiles={testData}/>
    </div>
    )
  }
}

export default App;
