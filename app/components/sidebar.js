import React from 'react';
import { Panel, Checkbox }
from 'react-bootstrap';
import SidebarItem from './sidebar_item';

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Types</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            {this.props.types.map(item =>
              <SidebarItem name={item} key={item} update={this.props.updateTypes}/>
            )}
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Networks</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            {this.props.networks.map(item =>
              <SidebarItem name={item} key={item} update={this.props.updateNetworks}/>
            )}
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
