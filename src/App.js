import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

class App extends React.Component {
    constructor(props)
    {super(props);
      this.state = {data : " ",}
      this.displayMessage = this.displayMessage.bind(this)
    };

    displayMessage() 
    {
      const date = new Date();
      const hours = date.getHours()
      if (hours < 12)
        {
          this.setState({data:'Good Morning Megha!'})
        }
      else if (hours < 18)
        {
          this.setState({data:'Good Afternoon Megha!'})
        }
      else
        {
          this.setState({data:'Good evening Megha!'})
        }
    }

  render()
    {
      return (
        <div>
          <input type = "button" onClick = {this.displayMessage}/>
          <h1>
            {this.state.data}
          </h1>
        </div>
      );
    }
  }
export default App;
