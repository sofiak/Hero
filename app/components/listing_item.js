import React from 'react';
import { Panel, Checkbox, Grid, Col, Label } from 'react-bootstrap';

export default class ListingItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      filters: props.filters,
      favorites: props.favorites,
      favorited: props.favorites.includes(props.hit.id) ? true : false
    }
    this.handleChange = this.handleChange.bind(this);
    this.isVisible = this.isVisible.bind(this);
    this.isFavorite = this.isFavorite.bind(this);
  }

  setInitial() {
    this.setState({ favorited: true })
  }

  isVisible(hit) {
    if(this.props.favorites_mode == true && this.isFavorite(hit)) {
      return true;
    }else if(this.props.favorites_mode && !this.isFavorite(hit)) {
      return false;
    }
    if (this.state.filters.types.length == 0 && this.state.filters.networks.length == 0) {
      return true;
    }
    let visible = true;

    if (this.state.filters.types.length > 0 && !this.state.filters.types.includes(hit.type)) {
      visible = false;
    }
    if (this.state.filters.networks.length > 0 && !this.state.filters.networks.includes(hit.network)) {
      visible = false;
    }
    return visible;
  }

  isFavorite(hit) {
    return this.state.favorites.includes(hit.id);
  }

  render(){

    return(
      <div style={{display: this.isVisible(this.props.hit) ? 'block' : 'none' }}>
        <Panel bsStyle="info">
        <Panel.Heading>
          <span>
            {this.props.hit.airtime} -- {this.props.hit.show}
          </span>
          <span align='right'>
            <Checkbox checked={this.state.favorited}
            onChange={this.handleChange}>
            Favorite
            </Checkbox>
          </span>
        </Panel.Heading>
          <Grid fluid={true}>
            <Col md={3}>
              <img src={this.props.hit.image}/>
            </Col>
            <Col md={8}>
              <h4> Season {this.props.hit.season} <Label>{this.props.hit.episode}</Label></h4>
              <p> on {this.props.hit.network}</p>
              <p>{this.props.hit.description}</p>
            </Col>
          </Grid>
        </Panel>
      </div>
    );
  }

  handleChange(evt) {
    this.setState({ favorited: evt.target.checked });
    this.props.update(this.props.hit, evt.target.checked);
  }
}
