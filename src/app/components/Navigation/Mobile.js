import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { NavDropdown, MenuItem } from 'react-bootstrap';
import _ from 'lodash';

class Mobile extends Component {
  constructor(props) {
    super(props);

    this.change = this.change.bind(this);
  }

  render() {
    const { links } = this.props;

    return (
      <NavDropdown title={ this.current() }
                   className="navigation--mobile"
                   id="mobile-menu">
        {
          links.map(({ label, path }) => (
            <MenuItem onClick={ () => this.change(path) }
                      key={ path }>
              { label }
            </MenuItem>
          ))
        }
      </NavDropdown>
    );
  }

  current() {
    const { links, location: { pathname } } = this.props;
    const current = _.find(links, link => {
      let path = pathname;
      if (_.startsWith(pathname, '/service')) { path = '/service'; }
      return link.path === path;
    });
    if (current) {
      return current.label;
    } else {
      return 'Loading'
    }
  }

  change(path) {
    const { history } = this.props;
    history.push(path);
  }
}

export default withRouter(Mobile);
