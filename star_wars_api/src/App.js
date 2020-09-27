import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
    }
  }

  componentDidMount() {
    fetch('https://swapi.py4e.com/api/planets')
      .then(response => response.json())
      .then(planets => {this.setState( { planets } )})
  }

  render () {
    const { planets } = this.state;
    console.log('planets', this.state.planets.results)
    if (planets.length === 0) {
      return <h1>Page Loading ...</h1>
    } else {
      return (
        <div className='tc'>
          <h1>Star Wars Planets</h1>
            <CardList planets={ planets.results } />
        </div>
      )
    }
  }  
}

export default App;
