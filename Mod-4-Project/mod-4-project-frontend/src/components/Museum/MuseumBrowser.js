import React from 'react';
// import ArtCard from '../containers/ArtCard'

export default class MuseumBrowser extends React.Component{
  render(){
    const renderArt = this.props.art.map((a,i) => {
      return(
        <div key = {i}>
          <a href= {a.webImage.url}>{a.title}</a>
        </div>
      )
    })
    return(
      <div>
        {renderArt}
      </div>
    )
  }

}
