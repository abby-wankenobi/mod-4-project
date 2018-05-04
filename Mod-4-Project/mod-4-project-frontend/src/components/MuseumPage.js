import React from 'react'
import MuseumBrowser from './Museum/MuseumBrowser'
import Filter from './Museum/Filter'
import Search from './Museum/Search'
import SortBy from './Museum/SortBy'
// import YourGallery from './Museum/YourGallery'

const artistUrl = 'https://www.rijksmuseum.nl/api/pages/en/rijksstudio/artists/'
const homeURL = 'https://www.rijksmuseum.nl/api/pages/en/rijksstudio/'
const collectionUrl = 'https://www.rijksmuseum.nl/api/nl/collection/'
const API = '?key=BDC9BYuC&format=json'

export default class MuseumPage extends React.Component{
  constructor(){
    super()
    this.state = {
      artKey: [],
      art: [],
      filters: 'highlights',
      SortBy: '',
      searchTerm: ''
    }
  }
  // componentDidMount(){
  //   fetch(homeURL+this.state.filters+API).then(r => r.json())
  //   .then(r => r.contentPage.categoryItems.forEach(item => this.setState({art: [...this.state.art, item]})))
  // }
  componentDidUpdate(prevProps, prevState){
    if(prevState.filters !== this.state.filters){
      this.fetchArtKey()
    }
    if(prevState.artKey !== this.state.artKey){
      this.fetchArt()
    }
  }

  handleSort = sortParams => {
    this.setState({SortBy: sortParams})
  }
  handleSearch = searchWord => {

    this.setState({searchTerm: searchWord})
  }
  handleFilters = filterOpt => {
    this.setState({filters: filterOpt.toLowerCase().split(' ').join('-')})
    // this.fetchArtKey()
  }
  handleAddArt = art => {
    if(!this.state.yourGallery.includes(art)){
      this.setState({yourGallery: [...this.state.yourGallery, art]})
    }
    else {
      alert("This piece is already in your gallery")
    }
  }
  fetchArtKey(){
    fetch(artistUrl + this.state.filters+ API).then(r => r.json())
    .then(r => this.setState({artKey: r.contentPage.artobjects_on_this_page}))
  }
  fetchArt(){
    this.state.artKey.forEach(key => fetch(collectionUrl + key + API)
    .then(r => r.json())
    .then(r => this.setState({art: [...this.state.art,r.artObject]})))
  }
  render(){
    console.log(this.state)
    return(
      <div>
        <Filter
        setFilter = {this.handleFilters}
        />
        <MuseumBrowser
        art = {this.state.art}
        />
      </div>
    )
  }
}
