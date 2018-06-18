import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'admin-on-rest/lib/mui';

const ProductList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='title' />
      <EditButton basePath='/products' />
    </Datagrid>
  </List>
);

export default ProductList;
