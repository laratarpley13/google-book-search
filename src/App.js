import './App.css';
import React, { Component } from 'react';
import Header from './header';
import SearchBar from './searchBar';
import Results from './results';

class App extends Component {
  state = {
    results: [],
    q: "henry",
    printType: "all",
    filter: "",
  }

  updateState = (key, value) => {
    this.setState({ [key]: value });
  }

  search = (e) => {
    //fetch request
    e.preventDefault();

    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}&printType=${this.state.printType}`;

    if (this.state.filter !== "") {
      url += `&filter=${this.state.filter}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ results: res.items ? res.items : [] }));
  };

  render() {
    return (
      <main className='App'>
        <Header />
        <SearchBar 
          {...this.state}
          search={this.search}
          updateState={this.updateState}
        />
        <Results {...this.state} />
      </main>
    )
  }
}

export default App;
