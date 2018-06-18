import React from 'react';
import PropTypes from 'prop-types';
import {
  Edit, SimpleForm, TextInput
} from 'admin-on-rest/lib/mui';
import RichTextInput from 'aor-rich-text-input';

const Title = ({ record }) => {
  return <span>Edit { record.title }</span>;
};

Title.propTypes = {
  record: PropTypes.object
}

const ProductEdit = (props) => (
  <Edit title={ <Title /> } {...props }>
    <SimpleForm>
      <TextInput source='title' />
      <RichTextInput source='copy' />
      <TextInput source='slug' />
    </SimpleForm>
  </Edit>
);

export default ProductEdit;
