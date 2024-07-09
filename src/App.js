import { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Search from './Search';
import Main from './Main';


class App extends Component {

  state = {
    apiData: {},
    searchQuery: '',
    darkMode: false,
  }


componentDidMount() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    this.setState({darkMode});
    this.applyMode(darkMode);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.darkMode !== this.state.darkMode) {
      this.applyMode(this.state.darkMode);
      localStorage.setItem('darkMode', this.state.darkMode);
    }
  }

  fetchData = async (query) => {
    if (!query) return;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Error! Status: ${res.status}`);
      const data = await res.json();
      console.log(data);
  
      this.setState({apiData: data[0]});
    } catch(error) {
      console.error('Error:', error);
    }
    
  }

  toggleMode = () => {
    this.setState((prevState) => ({darkMode: !prevState.darkMode}));
  }

  applyMode = (mode) => {
if (mode) {
  document.body.classList.add('dark-mode')
} else {
  document.body.classList.remove('dark-mode');
}
  }

  render() {

    const { apiData } = this.state;
    return(
      <div  className="App">
      <Nav toggleMode={this.toggleMode} />
      <Search searchQuery={this.state.searchQuery} onSearch={this.fetchData}/>
      <Main apiData={apiData} />
      </div>
    )
  }
}

export default App;
