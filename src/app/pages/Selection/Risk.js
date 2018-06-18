import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Selection from './Selection';
import { RiskSlider } from '../../components';

const renderOptions = (options, select, selected) => (
  <Grid>
    <Row>
      <Col md={ 12 }>
        <RiskSlider options={ options.sort((a, b) => b.id - a.id) }
                    onSelect={ select }
                    selected={ selected } />
      </Col>
    </Row>
  </Grid>
);

class Risk extends Selection {
}

Risk.defaultProps = {
  renderOptions: renderOptions,
  title: 'Please tell us how concerned you would be if your product fails?',
  type: 'RISK'
};

export default Risk;
