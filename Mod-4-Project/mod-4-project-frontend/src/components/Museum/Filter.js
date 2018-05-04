import React from 'react'

export default class Filter extends React.Component{
  constructor(){
    super()
    this.state = {
      artists:[],
      types: [],
      category: 'artists',
      option: ''

    }
  }
  componentDidMount(){
    fetch('https://www.rijksmuseum.nl/api/en/collection/?key=BDC9BYuC&format=json').then(r => r.json()).then(r => r.facets[0].facets.forEach(n => this.setState({artists: [...this.state.artists, n.key]})))
    fetch('https://www.rijksmuseum.nl/api/en/collection/?key=BDC9BYuC&format=json').then(r => r.json()).then(r => r.facets[4].facets.forEach(n => this.setState({types: [...this.state.types, n.key]})))
  }
  handleChangeCategory = event => {
    this.setState({category: event.target.value})
  }
  handleChangeOption = event => {
    this.setState({option: event.target.value})
  }
  handleClick = event => {
    this.props.setFilter(this.state.option)
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
        <div>
          Filter By:
          <select onChange = {this.handleChangeCategory} id="filter-category">
            <option value="artists">Artists</option>
            <option value="type">Type</option>
          </select>
        </div>
        <div>
          <select onChange={this.handleChangeOption} id="filter-option">
            {this.state.category === 'artists' ? renderArtistFilter : renderTypeFilter}
          </select>
          <button onClick={this.handleClick}>Search</button>
        </div>
      </div>
    )
  }

}
