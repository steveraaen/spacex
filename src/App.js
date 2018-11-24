import React, { Component } from 'react';
import './App.css';
import getAll from './fetchers.js'
class App extends Component {
  constructor(props) {
    super(props)
    this.state={}

  }
  
  componentDidMount(){
   getAll().then((data) => {

    this.setState({
      launches: data[0].data,
      launchpads: data[1].data
    })
   })
  }


  render() {
    console.log(this.state)
    if(Array.isArray(this.state.launches)){
          var launchesList = this.state.launches.map((lnch, idx)=> {
              lnch.launch_success = JSON.stringify(lnch.launch_success)
        return (
          <div key={idx} className='row'>
          <div className='cell'>{lnch.launch_year}</div>
          <div className='cell'>{lnch.mission_name}</div>
          <div className='cell'>{lnch.launch_success}</div>

            
          </div>
          )
      })
    }
    return (
      <div className="App">
        <div>{launchesList}</div>
      </div>
    );
  }
}

export default App;
