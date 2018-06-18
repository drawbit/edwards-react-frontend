import App from './app';
import AdminApp from './admin';
import _ from 'lodash';

export default _.startsWith(window.location.pathname, '/admin') ? AdminApp : App;
