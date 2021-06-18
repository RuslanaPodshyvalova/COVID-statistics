import { getData } from './api';

export const getStatisticsByCountry = (country) => {
    console.log(country)
    return getData(`/total/country/${country}/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`);
}
