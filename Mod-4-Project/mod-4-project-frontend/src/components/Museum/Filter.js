import React from 'react'

export default class Filter extends React.Component{
  constructor(){
    super()
    this.state = {
      artists:[]

    }
  }
  componentDidMount(){
    fetch('https://www.rijksmuseum.nl/api/en/collection/?key=BDC9BYuC&format=json').then(r => r.json()).then(r => r.facets[0].facets.forEach(n => this.setState({artists: [...this.state.artists, n.key]})))
  }
  render(){
    console.log(this.state)
    const renderArtistFilter = this.state.artists.map((artist,i) => {
      return(
        <option key = {i} value={artist}>{artist}</option>
      )
    })
    return(
      <div>
        Filter By:
        <select id="filter-category">
          <option value="artist">Artists</option>
          <option value="type">Type</option>
        </select>
        <select id="filter-options">
          {renderArtistFilter}
        </select>
      </div>
    )
  }

}
