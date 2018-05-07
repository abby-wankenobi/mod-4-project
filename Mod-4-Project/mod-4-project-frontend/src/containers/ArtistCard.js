import React from 'react';

const ArtistCard = props => {

  const {art} = props;

  let galleryOption = props.galleries.map(gallery => {
    return <option value={gallery.id}>{gallery.name}</option>
  })

  return(
    <div className="artistdiv">
      <img height="550" width="auto" src= {art.webImage.url}/>
      <div id="artist-info">
        <h1>{art.title}</h1>
        <h3>{art.principalMaker}</h3>
        <p>Date: {art.dating.presentingDate}</p>
        <p>Materials: {art.materials.map(art => art).join(" ")}</p>
        <p>Add to Gallery</p>
        <select onChange={props.handleChange}>
          <option>Select Gallery</option>
          {galleryOption}
        </select>
        <button onClick={props.saveToGallery}>Save</button>
        <br></br>
        <input onChange={props.handleGalleryChange} placeholder="Create and Add to New Gallery"/>
        <button onClick={props.saveNewGallery}>Create</button>
        <br></br>
        <br></br>
        <button onClick={props.handleArtistClick}>Back to Results</button>
        <button>Go to Your Galleries</button>
      </div>
    </div>
  )


}

export default ArtistCard
