import React from 'react';
// import ArtCard from '../containers/ArtCard'

export default class MuseumBrowser extends React.Component{
  render(){
    const renderArt = this.props.art.map((a,i) => {
      return(
        <div id="artist-image">
          <img height="200" width="auto" src= {a.webImage.url}/>
        </div>
      )
    })
    return(
      <div className="grid-container">
        {renderArt}
      </div>
    )
  }

}
