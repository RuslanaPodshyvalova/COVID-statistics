import React from 'react';
import PropTypes from 'prop-types';

export const CountryDetails = ({ country }) => (
  <>
    <p>County details: {country.name}</p>
    <p>County details: {country.totalCases}</p>
  </>
);

CountryDetails.propTypes = {
  name: PropTypes.string,
  totalCases: PropTypes.number,
}
