import React from 'react';
import { List, Datagrid, TextField, ChipField } from 'admin-on-rest/lib/mui';

const RequestList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='contact' />
      <ChipField source='kind' />
    </Datagrid>
  </List>
);

export default RequestList;
