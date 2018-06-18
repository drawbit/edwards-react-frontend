import React from 'react';
import background from './assets/Graphic_Silver-lozenge@2x@2x.png';
import './style.css';

const Lozenge = ({ title, body }) => (
    <div className="lozenge">
        <img className="lozenge__image" src={ background } alt={ title } />
        <div className="lozenge__title">{ title }</div>
        <div className="lozenge__body" dangerouslySetInnerHTML={ { __html: body } }></div>
    </div>
);

export default Lozenge;
