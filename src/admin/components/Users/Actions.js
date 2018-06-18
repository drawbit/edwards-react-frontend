import React from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import exportData from './actions/export-data';
import deleteAll from './actions/delete-all';

const cardActionStyle = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right',
};


const Actions = ({ resource, filters, displayedFilters, filterValues, basePath, showFilter, refresh }) => (
  <CardActions style={ cardActionStyle }>
    <FlatButton primary
                label='Export'
                icon={ <DownloadIcon /> }
                onClick={ exportData } />
    <FlatButton label='Clear'
                icon={ <DeleteIcon /> }
                onClick={ deleteAll } />
  </CardActions>
);

export default Actions;
