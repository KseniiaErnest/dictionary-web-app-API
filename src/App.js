import { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Search from './Search';
import Main from './Main';


class App extends Component {


  render() {
    return(
      <div  className="App">
      <Nav />
      <Search />
      <Main />
      </div>
    )
  }
}

export default App;
