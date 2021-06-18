import React, { useState, useEffect } from 'react';
import { getStatisticByAllCountries } from './api/statisticByAllCountries';
import { CountryList } from './components/CountryList';

export const App = () => {
  const [countries, setCountries] = useState([]);

  const loadAllCountries = () => {
    getStatisticByAllCountries()
      .then((countries) => {
        setCountries(countries);
      });
  };

  useEffect(() => {
    loadAllCountries();
  }, []);

  console.log(countries);
  
  return (
    <div>
      <CountryList countries={countries} />
    </div>
  );
}
