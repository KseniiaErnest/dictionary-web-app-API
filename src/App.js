import { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Search from './Search';
import Main from './Main';


class App extends Component {

  state = {
    apiData: {},
    searchQuery: '',
  }


componentDidMount() {
    // const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.searchQuery}`;
    // const res = await fetch(url);
    // const data = await res.json();
    // console.log(data);

    // this.setState({apiData: data[0]})

    this.fetchData(this.state.searchQuery)
  }

  fetchData = async (query) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    this.setState({apiData: data[0]})
  }

  render() {

    const { apiData } = this.state;
    return(
      <div  className="App">
      <Nav />
      <Search searchQuery={this.state.searchQuery} onSearch={this.fetchData}/>
      <Main apiData={apiData} />
      </div>
    )
  }
}

export default App;
