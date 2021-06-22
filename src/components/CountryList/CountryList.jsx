import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Country } from '../Country';
 
export const CountryList = ({ countries, onSelectCountry }) => (
  <ul>
    {countries.map( country => (
     <>
      <li
        key={uuidv4()}
        onClick={() => onSelectCountry(country)}
      >
        <Country {...country} />
      </li></>
    ))}
  </ul>
);

CountryList.propTypes = {
  countries: PropTypes.array,
  selectCountry: PropTypes.func,
}

CountryList.defaultProps = {
  countries: []
}
