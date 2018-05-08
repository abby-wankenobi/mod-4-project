import React from 'react';
import ArtCard from '../../containers/ArtCard'
import ArtistCard from '../../containers/ArtistCard'

export default class MuseumBrowser extends React.Component{
constructor(){
  super()
  this.state = {
    art: "allart",
    galleries: [],
    selectedGallery: null,
    newGallery: ""
  }
}

  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/galleries')
  //   .then(r => r.json())
  //   .then(json => this.setState({galleries: json}))
  // }

  saveNewGallery = () => {
    let body = {
      name: this.state.newGallery
      user_id: this.props.user_id
      }

    fetch('http://localhost:3000/galleries', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(r => r.json())
    .then(json => this.setState({selectedGallery: json.id})).then(this.saveToGallery())


  }

  saveToGallery = () => {

    let body = {
      title: this.state.art.title,
      artist: this.state.art.principalMaker,
      image: this.state.art.webImage.url,
      gallery_id: this.state.selectedGallery
    }

    fetch('http://localhost:3000/artworks', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(r => r.json())
    .then(json => alert("Poop"))
  }

  findArtShit = (id) => {
    return this.props.art.find(art => art.id === id)
  }


  handleClick = (e) => {
    this.setState({
      art: this.findArtShit(e.target.id)
    })
  }

  handleArtistClick = () => {
    this.setState({
      art: "allart"
    })
  }

  handleChange = (e) => {
    this.setState({
      selectedGallery: e.target.value
    })
  }

  handleGalleryChange = (e) => {
    this.setState({
      newGallery: e.target.value
    })
  }


  render(){
    console.log(this.state.art.title)
    let renderArt = ""

    if (this.state.art === "allart") {
      renderArt = this.props.art.map((art) => {
        return <ArtCard art={art} handleClick={this.handleClick}/>
      })
    } else {
      renderArt = <ArtistCard
                  selectedGallery={this.state.selectedGallery}
                  galleries={this.state.galleries}
                  art={this.state.art}
                  handleArtistClick={this.handleArtistClick}
                  handleChange={this.handleChange}
                  saveToGallery={this.saveToGallery}
                  handleGalleryChange={this.handleGalleryChange}
                  saveNewGallery={this.saveNewGallery}/>
    }

    return(
      <div className="grid-container">
       {renderArt}
      </div>
    )
  }

}
