import { Component } from "react";


export default class Main extends Component {


  render() {
    return(
      
      <main>
      {this.props.apiData && 
      <div>
        <div className="container-one">
        <div>
        <h1>{this.props.apiData.word}</h1>
        {this.props.apiData.phonetics && this.props.apiData.phonetics[1] && (
                  <p>{this.props.apiData.phonetics[1].text}</p>
                )}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
        </div>

        <div className="container-two">
        {this.props.apiData.meanings && this.props.apiData.meanings[0] && (
          <>
        <p>{this.props.apiData.meanings[0].partOfSpeech}</p>
        
        <div className="meaning-box">
        <p className="meaning">Meaning</p>
        {this.props.apiData.meanings[0].definitions.map((def, index) => (
          <ul key={index}>
          <li>{def.definition}</li>
        </ul>
        ))}
        
        </div>
{this.props.apiData.meanings[0].synonyms.map((syn, index) => (
  <div key={index} className="container-three">
          <p>Synonyms</p>
          <p>{syn}</p>
        </div>
))}
      

        </>
      )}
        </div>
      
      

        <div className="container-two">
        {this.props.apiData.meanings && this.props.apiData.meanings[1] && (
          <>
        <p>{this.props.apiData.meanings[1].partOfSpeech}</p>
        
        <div className="meaning-box">
        <p className="meaning">Meaning</p>
        {this.props.apiData.meanings[1].definitions.map((def, index) => (
          <ul key={index}>
          <li>{def.definition}</li>
        </ul>
        ))}
        
        </div>
        </>
      )}

      <div className="container-three">
<p>Source</p>
<a href={this.props.apiData.sourceUrls} target="_blank" rel='noopener noreferrer'>{this.props.apiData.sourceUrls}</a>
</div> 
        </div>

</div>
      }
      </main>
    
    )
  }
}


