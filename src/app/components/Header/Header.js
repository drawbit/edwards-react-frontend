import React from 'react';
import Logo from './Logo';
import { Navigation } from '../../components';
import './style.css';

const Header = () => (
  <header className="header">
    <Logo />
    <Navigation />
  </header>
);

export default Header;
