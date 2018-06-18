import React from 'react';
import classNames from 'classnames';

const Option = ({ icon, isActive, label, onSelect }) => {
  const classnames = classNames('selection__option', {
    'active': isActive
  });
  const image = icon[isActive ? 'active' : 'regular'];

  return (
    <li className={ classnames }
        onClick={ onSelect }>
      <img src={ image } alt={ label } />
      <div className="wrapper">
        <span className="text">{ label }</span>
      </div>
    </li>
  );
}

export default Option;
