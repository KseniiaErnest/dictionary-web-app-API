import { Component } from "react";


export default class Main extends Component {


  render() {
    return(
      <main>

        <div className="container-one">
        <div>
        <h1>keyboard</h1>
        <p>pronaunce</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fill-rule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
        </div>

        <div className="container-two">
        <p>noun</p>
        <div>
        <p className="meaning">Meaning</p>
        <ul>
          <li>hhffhf</li>
          <li>hhffhf</li>
          <li>hhffhf</li>
        </ul>

        </div>
        
        </div>
      
        <div className="container-three">
          <p>Synonyms</p>
          <p>gdgdgddgdg</p>
        </div>

        <div className="container-two">
        <p>verb</p>
        <div>
        <p className="meaning">Meaning</p>
        <ul>
          <li>hhffhf</li>
          <li>hhffhf</li>
          <li>hhffhf</li>
        </ul>
        </div>

        <div className="container-three">
          <p>Source</p>
          <p>link</p>
        </div>

        </div>

      </main>
    )
  }
}