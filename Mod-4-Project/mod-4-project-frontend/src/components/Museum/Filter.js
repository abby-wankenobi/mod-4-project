import React from 'react'

const url ='https://www.rijksmuseum.nl/api/en/collection/?key=BDC9BYuC&format=json'

export default class Filter extends React.Component{

  state = {
    artists: [],
    materials: [],
    period: [],
    filter: "artists"
  }

  // componentDidMount(){
  //   fetch('https://www.rijksmuseum.nl/api/en/collection/?key=BDC9BYuC&format=json').then(r => r.json()).then(r => r.facets[0].facets.forEach(n => this.setState({artists: [...this.state.artists, n.key]})))
  // }

  componentDidMount() {
    fetch(url)
    .then(r => r.json())
    .then(json => {
      this.setState({
      artists: json.facets[0].facets.map(artist => artist.key),
      materials: json.facets[4].facets.map(material => material.key),
      period: json.facets[2].facets.map(date => date.key)
    })
    console.log(json.facets)
  })
  }

  handleChange = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  render(){
    var filterOptions = ""
    if(this.state.filter === "artists"){
      filterOptions = this.state.artists.map((artist,i) => {
        return(
          <option key = {i} value={artist}>{artist}</option>
        )
      })
    } else if(this.state.filter === "materials"){
      filterOptions = this.state.materials.map((material,i) => {
        return(
          <option key = {i} value={material}>{material}</option>
        )
      })
    } else{
      filterOptions= this.state.period.map((period,i) => {
        return(
          <option key = {i} value={period}>{period}</option>
        )
      })
    }

    // const renderArtistFilter = this.state.artists.map((artist,i) => {
    //   return(
    //     <option key = {i} value={artist}>{artist}</option>
    //   )
    // })

    return(
      <div>
        Filter By:
        <select id="filter-category" onChange={this.handleChange}>
          <option value="artist">Artists</option>
          <option value="materials">Material</option>
          <option value="period">Period</option>
        </select>
        <select id="filter-options">
          {filterOptions}
        </select>
      </div>
    )
  }

}
