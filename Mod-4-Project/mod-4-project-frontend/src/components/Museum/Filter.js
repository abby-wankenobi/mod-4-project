import React from 'react'

export default class Filter extends React.Component{
  constructor(){
    super()
    this.state = {
      artists:[],
      types: ['Paintings', 'Sculpture','Furniture and interiors', 'Fashion', 'Applied Arts', 'Weapon and ship models', 'Works on paper', 'Asian art'],
      category: 'artists',
      option: ''

    }
  }
  componentDidMount(){
    fetch('https://www.rijksmuseum.nl/api/en/collection/?key=BDC9BYuC&format=json').then(r => r.json()).then(r => r.facets[0].facets.forEach(n => this.setState({artists: [...this.state.artists, n.key]})))
  }
  handleChangeCategory = event => {
    this.props.setFilterCat({category: event.target.value})
  }
  handleChangeOption = event => {
    this.props.setFilterOption({option: event.target.value})
  }
  handleClick = event => {
    this.props.fetchArtKey()
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
