import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import LINKS from './links.json';
import Desktop from './Desktop';
import Mobile from './Mobile';
import './style.css';

class Navigation extends Component {
  render() {
    const { loading } = this.props;
    if (loading) {
      return null;
    }

    const links = this.buildCurrentLinks();

    return (
      <div className="navigation">
        <Grid>
          <Row>
            <Col xs={ 12 }>
              <Desktop links={ links } />
              <Mobile links={ links } />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

  buildCurrentLinks() {
    const { location: { pathname } } = this.props;

    let links = [LINKS.HOME];
    if (pathname === '/details') {
      links.push(LINKS.DETAILS);
    }
    else if (_.startsWith(pathname, '/selection')) {
      links.push(LINKS.DETAILS);
      links.push(LINKS.SELECTION);
      links = links.concat(this.selectionLinks());
    }
    else if (_.startsWith(pathname, '/service')) {
      links.push(LINKS.DETAILS);
      links.push(LINKS.SELECTION);
      links = links.concat(this.selectionLinks());
      links.push(LINKS.SERVICE);
    }

    return links;
  }

  selectionLinks() {
    const { selection } = this.props;
    if (!selection) return [];
    const { current, previous } = selection;
    return [].concat(
      previous.map(link => LINKS[link.type]),
      current ? [LINKS[current.type]] : []
    );
  }
}

const mapStateToProps = (state) => state.selection;

export default withRouter(
  connect(
    mapStateToProps
  )(Navigation)
);
