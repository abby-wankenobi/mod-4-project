import React from 'react'
import MuseumBrowser from './Museum/MuseumBrowser'
import Filter from './Museum/Filter'
import Search from './Museum/Search'
import SortBy from './Museum/SortBy'
// import YourGallery from './Museum/YourGallery'

const url = 'https://www.rijksmuseum.nl/api/pages/en/rijksstudio/'
const API = '?key=BDC9BYuC&format=json'

export default class MuseumPage extends React.Component{
  constructor(){
    super()
    this.state = {
      art: [],
      filters: 'highlights',
      SortBy: '',
      searchTerm: ''
    }
  }
  componentDidMount(){
    fetch(url + this.state.filters + API).then(r => r.json())
    .then(r => r.contentPage.categoryItems.forEach(item => this.setState({art: [...this.state.art, item]})))
  }

  handleSort = sortParams => {
    this.setState({SortBy: sortParams})
  }
  handleSearch = searchWord => {
    this.setState({searchTerm: searchWord})
  }
  handleFilters = filterOpt => {
    this.setState({filters: filterOpt})
  }
  handleAddArt = art => {
    if(!this.state.yourGallery.includes(art)){
      this.setState({yourGallery: [...this.state.yourGallery, art]})
    }
    else {
      alert("This piece is already in your gallery")
    }
  }
  render(){
    return(
      <div>
        <Filter/>
        <MuseumBrowser
        art = {this.state.art}
        />
      </div>
    )
  }
}
