import React from 'react'

export default class GalleryPage extends React.Component{
  constructor(){
    super()
    this.state = {
      collections: {
        yourFirstCollection: []
      }
    }
  }
  render(){
    return(
      <div>
        <Collection
        art = {this.handleCollections}
        />
      </div>
    )
  }
}
