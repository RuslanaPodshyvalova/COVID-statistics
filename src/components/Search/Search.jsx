import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const Search = ({ onSetupSearchPhrase }) => {
  const [phrase, setPhrase] = useState('');

  useEffect(() => onSetupSearchPhrase(phrase))

  return (
    <input
      type="text"
      value={phrase}
      onChange={(event) => {
        const value = event.target.value;
        if (value !== phrase) {
          setPhrase(event.target.value)
        }
      }}
    />
  )
}

Search.propTypes = {
  onSetupSearchPhrase: PropTypes.func,
}