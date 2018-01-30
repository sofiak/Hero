import React from 'react';
import ListingItem from './listing_item';

export default class Listings extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
         {this.props.hits.map(hit =>
           <ListingItem key={hit.id} hit={hit}
           update={this.props.updateFavorites}
           filters={this.props.filters} favorites_mode={this.props.favorites_mode}
           favorites={this.props.favorites}/>
        )}
      </div>
    );
  }
}
