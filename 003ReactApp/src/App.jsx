import { Component, useState } from 'react'
import { CardList } from './components/card-list/card-list.component';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      subscribers : [],
      leaders : [],
      searchFiled : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({subscribers : users}))

    fetch('/assets/fans.json')
    .then(response => response.json())
    .then(fans => this.setState({leaders : fans}))
  }

  render(){
    return(
      <>

         <div className='App'>
          <input className='search1' type='search' placeholder='Search' 
          onChange={e => this.setState({searchFiled : e.target.value})}/> 
          <CardList subscribers = {this.state.subscribers}/>
        </div>
        <div className='App'>
            {
            this.state.leaders.map(leader => <h2 key={leader.id}>{leader.name}</h2>)
            }
          
        </div>
      </>
    );
  }
}

export default App
