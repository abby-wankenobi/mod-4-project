import React from 'react'

const artists = ["anonymous", "George Hendrik Breitner", "Jan Luyken", "Reinier Vinkeles (I)", "Marius Bauer", "Isaac Israels", "Daniel Nikolaus Chodowiecki", "Bernard Picart", "Willem Witsen", "Vincent Samuel Mentzel", "unknown", "Antonio Tempesta", "Carel Adolph Lion Cachet", "Johannes Tavenraat", "Rembrandt van Rijn", "Simon Fokke", "Jacob Houbraken", "Romeyn de Hooghe", "Meissener Porzellan Manufaktur", "Richard Roland Holst", "Philips Galle", "Johan Michaël Schmidt Crans", "Jozef Israëls", "Jacob de Gheyn (II)", "Wenceslaus Hollar", "Jan Veth", "Jacques Callot", "Crispijn van de Passe (I)", "Stefano della Bella", "Frans Hogenberg", "Johann Sadeler (I)", "Adriaen Collaert", "Caspar Luyken", "Hendrick Goltzius", "Michel Wolgemut", "Anton Mauve", "Willem Diepraam", "Leo Gestel", "Virgilius Solis", "Cornelis Vreedenburgh", "Jan van de Velde (II)", "François Séraphin Delpech", "Christoffel van Sichem (II)", "Jeanne Bieruma Oosting", "Gerrit Willem Dijsselhof", "Pieter Schenk (I)", "Anselmus Boëtius de Boodt", "Carel Nicolaas Storm van 's-Gravesande", "August Allebé", "Willem Cornelis Rip", "Jean Lepautre", "Johannes of Lucas van Doetechum", "Hendrik Spilman", "Hendrik Doijer", "Reijer Stolk", "Eva Charlotte Pennink-Boelen", "Israël Silvestre", "Manufactuur Oud-Loosdrecht", "Theo van Hoytema", "Jan Caspar Philips", "Simon Frisius", "Hieronymus Wierix", "Charles Donker", "Claude Mellan", "Giovanni Battista Piranesi", "Pam Georg Rueter", "Abraham Rademaker", "Andries Jager", "Delizy", "Giorgio Sommer", "Carel Christiaan Antony Last", "Boëtius Adamsz. Bolswert", "Antoon Derkinderen", "Johannes Wierix", "Jan Punt", "Jacob Matham", "Carel Willink", "Jan Brandes", "Albrecht Dürer", "Aegidius Sadeler", "Claes Jansz. Visscher (II)", "Martin Bernigeroth", "Anthonie van den Bos", "Lodewijk Schelfhout", "Maria Vos", "Isaac Weissenbruch", "Johannes Immerzeel", "Johannes Josephus Aarts", "Nicolaes de Bruyn", "Peter Vos", "Adrianus Eversen", "Pietro Sante Bartoli", "Annelies Romein", "Cornelis Galle (I)", "Crispijn van de Passe (II)", "Nicolas Perelle", "Woodbury & Page", "Marcantonio Raimondi", "Pieter de Mare", "Jacob Folkema"]
export default class Filter extends React.Component{
  render(){
    const renderArtistFilter = artists.map((artist,i) => {
      return(
        <option key = {i} value={artist}>{artist}</option>
      )
    })
    return(
      <div>
        Filter By:
        <select id="filter-category">
          <option value="artist">Artists</option>
          <option value="type">Type</option>
        </select>
        <select id="filter-options">
          {renderArtistFilter}
        </select>
      </div>
    )
  }

}
