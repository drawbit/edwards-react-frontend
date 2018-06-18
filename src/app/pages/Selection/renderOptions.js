import React from 'react';
import { Royal3DCarousel } from '../../components';

export default (options, select, selected) => {
  return (
    <Royal3DCarousel options={ options }
                     onSelect={ select } />
  );
}
