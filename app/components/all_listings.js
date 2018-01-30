import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Listings from './listings';
import Sidebar from './sidebar';

export default class AllListings extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Grid>
          <Row className="show-grid">
          {!this.props.favorites_mode ? (
            <Col xs={4} md={2}>
              <Sidebar types={this.props.types} networks={this.props.networks}
              updateNetworks={this.props.updateNetworks} updateTypes={this.props.updateTypes}/>
            </Col>
          ) : ("") }
            <Col xs={6} md={10}>
              <Listings hits={this.props.hits} updateFavorites={this.props.updateFavorites}
               filters={this.props.filters} favorites={this.props.favorites}
               favorites_mode={this.props.favorites_mode}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
