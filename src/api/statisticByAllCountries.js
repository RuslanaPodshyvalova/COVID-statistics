import { getData } from './api';

export const getStatisticByAllCountries = () => getData('/countries');
