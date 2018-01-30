import React from 'react';
import NavigationBar from "./nav_bar";
import DataFetcher from './data_fetcher';
import AllListings from './all_listings';
import Favorites from './favorites';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.types = [];
    this.networks = [];
    this.state = {
      hits: [],
      filters: {
        types: [],
        networks: [],
      },
      favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
      favorites_mode: false,
    };

    this.updateTypes = this.updateTypes.bind(this);
    this.updateNetworks = this.updateNetworks.bind(this);
    this.updateFavorites = this.updateFavorites.bind(this);
    this.setFavoritesMode = this.setFavoritesMode.bind(this);
  }

  setFavoritesMode(isActivated){
    if(isActivated && !this.state.favorites_mode){
      this.setState({favorites_mode: true});
    }
    if(!isActivated && this.state.favorites_mode){
      this.setState({favorites_mode: false});
    }
  }

  updateTypes(item, isChecked) {
    if(isChecked){
      let types = this.state.filters.types;
      types.push(item);
      let filters = { types: types, networks: this.state.filters.networks };
      this.setState({ filters: filters });
    }
    if(!isChecked) {
      let index = this.state.filters.types.indexOf(item);
      let copy = this.state.filters.types;
      copy.splice(index, 1);
      let filters = { types: copy, networks: this.state.filters.networks }
      this.setState({ filters: filters });
    }

  }

  updateNetworks(item, isChecked) {
    if(isChecked){
      let networks = this.state.filters.networks;
      networks.push(item);
      let filters = { types: this.state.filters.types, networks: networks };
      this.setState({ filters: filters });
    }
    if(!isChecked) {
      let index = this.state.filters.networks.indexOf(item);
      let copy = this.state.filters.networks;
      copy.splice(index, 1);
      let filters = { types: this.state.filters.types, networks: copy  }
      this.setState({ filters: filters });
    }

  }

  updateFavorites(item, isChecked){
    if(isChecked){
      let favorites = this.state.favorites;
      favorites.push(item.id);
      this.setState({ favorites: favorites });
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    if(!isChecked) {
      let index = this.state.favorites.indexOf(item.id);
      let copy = this.state.favorites;
      copy.splice(index, 1);
      this.setState({ favorites: copy });
      localStorage.setItem('favorites', JSON.stringify(copy));
    }
  }

  componentDidMount() {
    let fetcher = new DataFetcher();
    fetcher.get().then(data => {
      this.generateFilters(data);
      this.setState({hits: data});

    })
  }

  generateFilters(data) {
    data.map(item => {
      if(!this.types.includes(item.type)) {
        this.types.push(item.type);
      }
      if(!this.networks.includes(item.network)) {
        this.networks.push(item.network);
      }
    });
  }

  render() {
    return (
      <div>
        <NavigationBar update={this.setFavoritesMode}/>
          <AllListings types={this.types} networks={this.networks}
          updateNetworks={this.updateNetworks} updateTypes={this.updateTypes}
          hits={this.state.hits} updateFavorites={this.updateFavorites}
          favorites_mode={this.state.favorites_mode} filters={this.state.filters}
          favorites={this.state.favorites} />
      </div>
    );
  }
}
