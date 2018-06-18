import React from 'react';
import { ButtonLink } from '../../components';

const Buttons = ({ baseUrl }) => (
  <div className="product__buttons">
    <ButtonLink href={ `${ baseUrl }/thanks` }>
      Buy now
    </ButtonLink>
    <ButtonLink href={ `${ baseUrl }/email` }>
      Request an email
    </ButtonLink>
    <ButtonLink href={ `${ baseUrl }/call` }>
      Request a call
    </ButtonLink>
  </div>
);

export default Buttons;
