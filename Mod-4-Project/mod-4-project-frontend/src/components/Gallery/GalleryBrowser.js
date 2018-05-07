import React from 'react'

export default class GalleryBrowser extends React.Component{

  render(){

    const gallery = this.props.yourGalleries.map(gallery => {
      return (
        <h1>{gallery.name}</h1>
      )
    })
    
    return (
      <div>
        {gallery}
      </div>
    )
  }
}
