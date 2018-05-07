import React from 'react'
export default class Filter extends React.Component{
  constructor(){
    super()
    this.state = {
      artists:['Jan Baptist Xaverij', 'Adriaen van Wesel', 'Hendrik Voogd', 'Claes Jansz. Visscher II', 'Paulus Willemsz van Vianen', 'Adam van Vianen', 'Johannes Cornelisz. Verspronck ', 'Johannes Vermeer', 'Rombout Verhulst', 'Adriaen Pietersz van de Venne', 'Willem van de II Velde', 'Willem van de Velde I', 'Jean Baptiste Vanmour', 'Cornelis Troost', 'Michael Sweerts', 'Jan Havicksz Steen', 'Hercules Segers', 'Jan van Scorel', 'Gerrit Schouten', 'Jan Gregor van der Schardt', 'Roelant Savery', 'Pieter Jansz Saenredam', 'Salomon van Ruysdael', 'Jacob Isaacksz van Ruisdael', 'Peter Paul Rubens', 'Rembrandt van Rijn', 'Paulus Potter', 'Frans Jansz Post', 'Nicolaas Pieneman', 'Jan Willem Pieneman ', 'Adriaen van Ostade', 'Abraham Mignon', 'Michiel Jansz van Mierevelt', 'Gabriel Metsu', 'Hendrik Willem Mesdag', 'Master van Alkmaar', 'Anton Mauve', 'Karel van Mander', 'Nicolaes Maes', 'Johannes Lutma', 'Jean Etienne Liotard', 'Jan Lievens', 'Lucas van Leyden', 'Adriaan de Lelie', 'Pieter Lastman', 'Rene Jules Lalique', 'Gerard de Lairesse', 'Jan Adam Kruseman', 'Willem Bartel van der Kooi', 'Philips Koninck', 'Hendrik de Keyser', 'Adriaen Thomasz. Key', 'Jacob Jordaens', 'Wenzel Jamnitzer', 'Jozef Israels', 'Isaac Israels', 'Pieter de Hooch', 'Gerard van Honthorst', 'Melchior d Hondecoeter', 'Katsushika Hokusai', 'Hiroshige', 'Bartholomeus van der Helst', 'Maarten van Heemskerck', 'Jan Davidsz. de Heem', 'Willem Claesz. Heda' ,'Frans Hals', 'Dirck Hals', 'Jan van Goyen', 'Francisco José de Goya y Lucientes', 'Hendrick Goltzius', 'Vincent van Gogh', 'Giambologna', 'Jacob de Gheyn', 'Geertgen tot Sint Jans', 'Gao Qipei', 'Paul Joseph Constantin Gabriel', 'Govert Flinck', 'Caesar Boetius van Everdingen', 'Gerbrand van den Eeckhout', 'Albrecht Durer', 'Anthony van Dyck', 'Karel Dujardin', 'Gerard Dou', 'Herman Doomer', 'Aelbert Cuyp', 'Jacobus Cressant', 'Jacob Cornelisz. van Oostsanen', 'Cornelis Cornelisz. van Haarlem', 'Adriaen Coorte', 'Pieter Claesz', 'Willem Pietersz. Buytewech', 'Hendrick ter Brugghen', 'George Hendrik Breitner', 'Andre Charles Boulle', 'Jan Both', 'Gerard ter Borch', 'Ferdinand Bol', 'Abraham Bloemaert', 'Gerard Bilders', 'Joachim Beuckelaer', 'Gerrit Adriaensz Berckheyde', 'Nicolaes Pietersz Berchem', 'Ludolf Bakhuysen', 'Dirck van Baburen', 'Hendrick Avercamp', 'Karel Appel', 'Lawrence Alma Tadema', 'Pieter Aertsen'],

      mediums: ['Paintings', 'Landscapes', 'Portraits', 'Still lifes', 'Biblical scenes', 'Daily life paintings', 'History scenes', 'Myths and symbols', 'Sculpture', 'Marble', 'Bronze', 'Wood', 'Terracotta','Furniture and interiors','Doll houses', 'Taperstries', 'Chests and cupboards', 'Chairs sofas and beds', 'Writing tables', 'Fashion', 'Costumes', 'Accessories', 'Watches', 'Jewels', 'Applied Arts', 'Noble metals', 'Base metals', 'Glass', 'Ceramics', 'Textiles', 'Weapons and ship models', 'Firearms', 'Cannons', 'Daggers sabres and foils', 'Ship models', 'Armour','Works on paper', 'Prints', 'Drawings', 'Photographs', 'Asian art', 'Asian sculptures', 'Works on paper', 'Asian interior'],
      category: '',
      option: ''

    }
  }
  handleChangeCategory = event => {
    this.setState({category: event.target.value})
    this.props.setFilterCat({category: event.target.value})
  }
  handleChangeOption = event => {
    this.setState({option: event.target.value})
    this.props.setFilterOption({option: event.target.value})
  }
  handleClick = event => {
    this.props.fetchArtKey()
  }

  render(){
    const renderArtistFilter = this.state.artists.sort(function(a,b){return a.localeCompare(b)}).map((artist,i) => {
      return(
        <option key = {i} value={artist}>{artist}</option>
      )
    })
    const renderTypeFilter = this.state.mediums.map((medium, i) => {
      return(
        <option key = {i} value={medium}>{medium}</option>
      )
    })
    const renderFilter = this.state.category === 'artists' ? renderArtistFilter : renderTypeFilter

    return(
      <div id="filter">
        <div className="filter" id="category">
          <p>Filter By: </p>
          <select onChange = {this.handleChangeCategory} id="filter-category">
            <option selected= "selected" value="">Select Category</option>
            <option value="artists">Artists</option>
            <option value="medium">Medium</option>
          </select>
        </div>
        <div className="filter" id="option">
          <select onChange={this.handleChangeOption} id="filter-option">
            <option selected= "selected" value="default">Select Option</option>
            {this.state.category !== '' ? renderFilter : null}
          </select>
          <div className="filter button"><button onClick={this.handleClick}>Search</button></div>
        </div>
      </div>
    )
  }

}
