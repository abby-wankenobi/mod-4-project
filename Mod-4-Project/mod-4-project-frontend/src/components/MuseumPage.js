import React from 'react'
import MuseumBrowser from './Museum/MuseumBrowser'
import Filter from './Museum/Filter'
import Search from './Museum/Search'
import SortBy from './Museum/SortBy'
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
      artKey: [],
      art: [],
      filters: {
        category:'artists',
        option:''
       },
      SortBy: '',
      searchTerm: ''
    }
  }
  // componentDidMount(){
  //   fetch(homeURL+this.state.filters+API).then(r => r.json())
  //   .then(r => r.contentPage.categoryItems.forEach(item => this.setState({art: [...this.state.art, item]})))
  // }
  componentDidUpdate(prevProps, prevState){
    // if(prevState.filters.option !== this.state.filters.option){
    //   this.fetchArtKey()
    // }
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

    fetch(artistUrl + this.state.filters.option + API).then(r => r.json())
    .then(r => this.setState({artKey: r.contentPage.artobjects_on_this_page}))
  }
  fetchArt = () => {
    this.state.artKey.forEach(key => fetch(collectionUrl + key + API)
    .then(r => r.json())
    .then(r => this.setState({art: [...this.state.art,r.artObject]})))
  }
  render(){
    console.log(this.state.filters.option)
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
