import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Card from './Card.js';
import "tachyons";
import { robots } from './robots.js'
import CardList from './CardList.js'
import SearchBox from './SearchBox.js'
import Scroll from './Scroll.js'



class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: '',
      copyRobots: robots
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> {
      return response.json();
    })
    .then(users => {
      this.setState({robots: users})
    })
    //this.setState({robots: robots})
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
    
    //this.setState({robots: filteredRobots})
        
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    if(this.state.robots.length === 0){
      return <h1>Loading...</h1>
    }
    else{
      return ( 
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox  
            searchChange={this.onSearchChange}
          />
          <Scroll>
            <CardList 
              robots={filteredRobots} 
            />
          </Scroll>
        </div>

      );
    }
  }
}

export default App;