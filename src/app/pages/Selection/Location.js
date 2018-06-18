import React from 'react';
import { Grid } from 'react-bootstrap';
import Selection from './Selection';
import { LocationSelector } from '../../components';

const renderOptions = (options, select, selected) => (
  <Grid>
    <LocationSelector options={ options }
                      onSelect={ select }
                      selected={ selected } />
  </Grid>
);

class Location extends Selection {
}

Location.defaultProps = {
  renderOptions: renderOptions,
  title: '',
  type: 'LOCATION'
};

export default Location;
