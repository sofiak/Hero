import React from 'react';
import { Checkbox } from 'react-bootstrap';

export default class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  render(){
    return (
      <div key={this.name}>
        <Checkbox checked={this.state.checked}
          onChange={this.handleChange}>
          {this.name}
        </Checkbox>
      </div>
    )
  }

  handleChange(evt) {
    this.setState({ checked: evt.target.checked });
    this.props.update(this.name, evt.target.checked);
  }
}
