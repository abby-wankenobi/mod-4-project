import React from 'react'
import Gallery from './Gallery'

export default class GalleryBrowser extends React.Component{

  state = {
    galleries: [],
    gallery_id: "",
    galleryName: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/galleries')
    .then(r => r.json())
    .then(json => this.setState({
      galleries: json
    }))
  }

  deleteGallery = () => {
    fetch(`http://localhost:3000/galleries/${this.state.gallery_id}`, {
      method: "DELETE"
    }).then(r => r.json())
    .then(json => this.setState({
      galleries: json
    }))
  }

  handleClick = (e) => {
    console.log(e.target.title)
    if(this.state.gallery_id === ""){
      this.setState({
        gallery_id: e.target.id,
        galleryName: e.target.title
      })
    }else{
      this.setState({
        gallery_id: "",
        galleryName: ""
      })
    }
  }


  render(){
    const galleries = this.state.galleries.map(gallery => {
      return (
        <div>
          <h3 onClick={this.handleClick} title={gallery.name} id={gallery.id}>{gallery.name}</h3>
        </div>
      )
    })

    return(
      <div>
        {this.state.gallery_id === "" ?
          <div>
            <h2>Your Galleries</h2>
            {galleries}
          </div> :
          <Gallery  deleteGallery={this.deleteGallery} galleryName={this.state.galleryName} handleClick={this.handleClick} galleryID={this.state.gallery_id}/>}
        <a href="http://localhost:3001/museum">Go to Museum</a>
      </div>
    )
  }

}
