import React from 'react'

export default class Gallery extends React.Component{

  state ={
    artworks: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/galleries/${this.props.galleryID}/artworks`)
    .then(r => r.json())
    .then(json => this.setState({
      artworks: json
    }))
  }

  render(){

    const art = this.state.artworks.map(art => {
      return (
        <div>
          <img src={art.image} height='200px'/>
          <h3>{art.title}</h3>
        </div>
      )
    })

    return(
      <div>
        {art}
        <button onClick={this.props.handleClick}>Back to Galleries</button>
      </div>
    )
  }

}
