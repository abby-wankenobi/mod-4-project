import React from 'react'

export default class Filter extends React.Component{
  constructor(){
    super()
    this.state = {
      artists:[],
      types: [],
      option: 'artists'

    }
  }
  componentDidMount(){
    fetch('https://www.rijksmuseum.nl/api/en/collection/?key=BDC9BYuC&format=json').then(r => r.json()).then(r => r.facets[0].facets.forEach(n => this.setState({artists: [...this.state.artists, n.key]})))
    fetch('https://www.rijksmuseum.nl/api/en/collection/?key=BDC9BYuC&format=json').then(r => r.json()).then(r => r.facets[4].facets.forEach(n => this.setState({types: [...this.state.types, n.key]})))
  }
  handleChange = event => {
    this.setState({option: event.target.value})
  }
  render(){
    const renderArtistFilter = this.state.artists.map((artist,i) => {
      return(
        <option key = {i} value={artist}>{artist}</option>
      )
    })
    const renderTypeFilter = this.state.types.map((type, i) => {
      return(
        <option key = {i} value={type}>{type}</option>
      )
    })

    return(
      <div>
        Filter By:
        <select onChange = {this.handleChange} id="filter-category">
          <option value="artists">Artists</option>
          <option value="type">Type</option>
        </select>
        <select id="filter-options">
          {this.state.option === 'artists' ? renderArtistFilter : renderTypeFilter}
        </select>
      </div>
    )
  }

}
