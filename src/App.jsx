import React, { useState, useEffect } from 'react';
import './App.scss'
import { getAllCountries } from './api/countries';
import { getStatisticsByCountry } from './api/statisticsByCountry'
import { CountryList } from './components/CountryList';
import { CountryDetails } from './components/CountryDetails';
import { Search } from './components/Search';

export const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryDetailsForPeriod, setCountryDetailsForPeriod] = useState(null);
  const [countryDetails, setCountryDetails] = useState(null);
  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    loadAllCountries();
  }, []);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  useEffect(() => {
    selectedCountry && getStatisticsByCountry(selectedCountry.Country)
      .then(setCountryDetailsForPeriod)
  }, [selectedCountry]);

  useEffect(() => {
    const totalCases = countryDetailsForPeriod && countryDetailsForPeriod.reduce((sum, data) => {
      return sum + data.Cases
    }, 0);

    setCountryDetails((prevInfo) => ({
      ...prevInfo,
      totalCases: totalCases
    }));
  }, [countryDetailsForPeriod]);

  useEffect(() => {
    setFilteredCountries(countries.filter(country => country.Country.includes(searchPhrase)));
    console.log(filteredCountries);
  }, [searchPhrase]);

  const loadAllCountries = () => {
    getAllCountries()
      .then(setCountries)
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setCountryDetails((prevInfo) => ({
      ...prevInfo,
      name: country.Country,
    }));
  }

  const setupSearchPhrase = (phrase) => {
    setSearchPhrase(phrase);
  }

  return (
    <div className="content">
      <div>
        I am looking for {searchPhrase}
      </div>
      <div>
        <Search onSetupSearchPhrase={setupSearchPhrase} />
        <CountryList countries={filteredCountries} onSelectCountry={selectCountry} />
      </div>
      <div className="details">
        {selectedCountry && (
          <CountryDetails country={countryDetails} />
        )}
      </div>
    </div>
  );
}
