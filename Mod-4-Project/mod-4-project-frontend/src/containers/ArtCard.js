import React from 'react';

const ArtCard = props => {

  const {art} = props;

  return(
    <div id="artist-image">
      <img id={art.id} onClick={props.handleClick} height="200" width="auto" src= {art.webImage.url}/>
    </div>
  )


}

export default ArtCard
