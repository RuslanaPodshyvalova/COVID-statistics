import React from 'react';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4'
import { Country } from '../components/Country';
 
export const CountryList = ({ countries }) => (
  <ul>
    {countries.map( country => (
      <li key={uuid()}>
        <Country {...country} />
      </li>
    ))}
  </ul>

);

CountryList.propTypes = {
  countries: PropTypes.array,
}

CountryList.defaultProps = {
  countries: []
}
