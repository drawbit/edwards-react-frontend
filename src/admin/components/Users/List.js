import React from 'react';
import { List, Datagrid, TextField, BooleanField } from 'admin-on-rest/lib/mui';
import Actions from './Actions';

const UserList = (props) => (
  <List {...props} actions={ <Actions /> }>
    <Datagrid>
      <TextField source='full_name' />
      <TextField source='company_name' />
      <TextField source='email_address' />
      <TextField source='job_title' />
      <BooleanField source='marketing_confirmation' />
    </Datagrid>
  </List>
);

export default UserList;
