import { Component } from "react";

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: props.searchQuery,
    };
  }

  handleChange = (e) => {
    this.setState({searchQuery: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSearch(this.state.searchQuery);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <input value={this.state.searchQuery} onChange={this.handleChange} className="search-bar" type="text" placeholder="Search for any word..."/>
      </form>
    )
  }
}