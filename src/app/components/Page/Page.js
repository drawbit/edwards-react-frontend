import React from 'react';
import { Loading } from '../../components';
import './style.css';

const Page = ({ children, loading, className }) => (
  <div className={ `page ${ className ? className : '' }` }>
    { loading && <Loading /> }
    { loading || children }
  </div>
);

export default Page;
