import React from 'react';
import PropTypes from 'prop-types';

export const Country = ({ Country, Slug, ISO2 }) => (
  <div>
    <p>{Country}</p>
    <p>{Slug}</p>
    <p>{ISO2}</p>
  </div> 
);

Country.propTypes = {
  Country: PropTypes.string,
  Slug: PropTypes.string,
  ISO2: PropTypes.string,
}
