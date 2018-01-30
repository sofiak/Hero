import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class NavigationBar extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }



  render(){
    return(
      <Navbar>
        <Nav>
          <NavItem name="home" onClick={this.handleChange}>TV Guide</NavItem>
          <NavItem name="favorites" onClick={this.handleChange}>
          Favorites
          </NavItem>
        </Nav>
      </Navbar>
    )
  }

  handleChange(evt){
    if(evt.target.name == "favorites") {
      this.props.update(true);
    }else{
      this.props.update(false);
    }
  }
}
