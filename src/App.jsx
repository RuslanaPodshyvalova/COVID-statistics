import React, { useState, useEffect } from 'react';
import './App.scss'
import { getAllCountries } from './api/countries';
import { getStatisticsByCountry } from './api/statisticsByCountry'
import { CountryList } from './components/CountryList';
import { CountryDetails } from './components/CountryDetails';

export const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryDetailsForPeriod, setCountryDetailsForPeriod] = useState(null);
  const [countryDetails, setCountryDetails] = useState(null);

  const loadAllCountries = () => {
    getAllCountries()
      .then(setCountries)
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setCountryDetails((prevInfo)=> ({
      ...prevInfo, 
      name: country.Country,
    }));
  }

  useEffect(() => {
    loadAllCountries();
  }, []);

  useEffect(() => {
    selectedCountry && getStatisticsByCountry(selectedCountry.Country)
      .then(setCountryDetailsForPeriod)
  }, [selectedCountry]);

  useEffect(() => {
    const totalCases = countryDetailsForPeriod && countryDetailsForPeriod.reduce((sum, data) => {
      return sum + data.Cases
    }, 0);
    console.log(totalCases)

    setCountryDetails((prevInfo)=> ({
      ...prevInfo, 
      totalCases: totalCases
    }));
  }, [countryDetailsForPeriod]);
  

  return (
    <div className="content">
      <CountryList countries={countries} onSelectCountry={selectCountry} />
      <div>
        {selectedCountry && (
          <CountryDetails country={countryDetails} />
        )}
      </div>
    </div>
  );
}
