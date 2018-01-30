import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Listings from './listings';

export default class Favorites extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={12}>
              <Listings hits={this.props.favorites}
              updateFavorites={this.props.updateFavorites}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
