import React from 'react';
import { ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

const DEFAULT_TITLE = 'Please select a location...';

const Dropdown = ({ options, onSelect, selected }) => (
  <ButtonGroup block={ true }
               vertical={ true }
               className="locationselector__dropdown">
    <DropdownButton title={ selected.label || DEFAULT_TITLE }
                    id="location-dropdown"
                    bsSize="large">
      {
        options.map(option => (
          <MenuItem key={ option.id }
                    onClick={ () => onSelect(option) }>
            { option.label }
          </MenuItem>
        ))
      }
    </DropdownButton>
  </ButtonGroup>
);

export default Dropdown;
