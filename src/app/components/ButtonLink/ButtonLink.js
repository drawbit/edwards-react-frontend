import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ButtonLink = ({ children, href }) => (
  <Link className="buttonlink"
        to={ href }>
    { children }
  </Link>
);

ButtonLink.defaultProps = {
  href: '#'
};

export default ButtonLink;
