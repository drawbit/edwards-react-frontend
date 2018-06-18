import React from 'react';
import { NavLink } from 'react-router-dom';

const Desktop = ({ links }) => (
  <div className="navigation--desktop">
    {
      links.map(({ exact = true, label, path }) => (
        <NavLink to={ path }
                 exact={ exact }
                 className="navigation__link"
                 activeClassName="active"
                 key={ path }>
          { label }
        </NavLink>
      ))
    }
  </div>
);

export default Desktop;
