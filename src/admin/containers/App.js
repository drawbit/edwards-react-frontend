import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import authClient from '../lib/auth-client';
import restClient from '../lib/rest-client';
import Products from '../components/Products';
import Users from '../components/Users';
import Requests from '../components/Requests';

const App = () => (
  <Admin authClient={ authClient }
         restClient={ restClient('/api/admin') }
         title='Edwards'>
    <Resource name='products' { ...Products } />
    <Resource name='users' { ...Users } />
    <Resource name='requests' { ...Requests } />
  </Admin>
);

export default App;
