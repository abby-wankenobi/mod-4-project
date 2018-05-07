import React from 'react'
import MuseumBrowser from './Museum/MuseumBrowser'
import Filter from './Museum/Filter'
// import YourGallery from './Museum/YourGallery'

const artistUrl = 'https://www.rijksmuseum.nl/api/pages/en/rijksstudio/artists/'
// const homeURL = 'https://www.rijksmuseum.nl/api/pages/en/rijksstudio/'
const collectionUrl = 'https://www.rijksmuseum.nl/api/en/collection/'
const API = '?key=BDC9BYuC&format=json'
const typeUrl = 'https://www.rijksmuseum.nl/api/pages/en/rijksstudio/works-of-art/'

export default class MuseumPage extends React.Component{
  constructor(){
    super()
    this.state = {
      username:'',
      artKey: [],
      art: [],
      filters: {
        category:'',
        option:''
       },
      SortBy: '',
      searchTerm: ''
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.artKey !== this.state.artKey){
      this.setState({art: []})
      this.fetchArt()
    }
  }

  handleSort = sortParams => {
    this.setState({SortBy: sortParams})
  }
  handleSearch = searchWord => {

    this.setState({searchTerm: searchWord})
  }
  handleFiltersCat = filterCat => {
    console.log('....',filterCat)
    this.setState({filters: {...this.state.filters, category: filterCat.category.toLowerCase().split(' ').join('-')}})
    // this.fetchArtKey()
  }
  handleFiltersOption = filterOpt => {
    console.log('....',filterOpt)
    this.setState({filters: {...this.state.filters, option: filterOpt.option.toLowerCase().split(' ').join('-')}})
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
  fetchArtKey = () => {
    if (this.state.filters.category === 'artists'){
      fetch(artistUrl + this.state.filters.option + API).then(r => r.json())
      .then(r => this.setState({artKey: r.contentPage.artobjects_on_this_page}))
    }
    if(this.state.filters.category === 'medium'){
      fetch(typeUrl + this.state.filters.option + API).then(r => r.json())
      .then(r => this.setState({artKey: r.contentPage.artobjects_on_this_page}))
    }
  }
  fetchArt = () => {
    this.state.artKey.forEach(key => fetch(collectionUrl + key + API)
    .then(r => r.json())
    .then(r => this.setState({art: [...this.state.art,r.artObject]})))
  }
  handleUsername = username => {
    this.setState(username: username)
  }
  render(){
    return(
      <div>
        <Filter
        setFilterCat = {this.handleFiltersCat}
        setFilterOption ={this.handleFiltersOption}
        fetchArtKey = {this.fetchArtKey}
        />
        <MuseumBrowser
        art = {this.state.art}
        />
      </div>
    )
  }
}
