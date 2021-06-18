import { getData } from './api';

export const getAllCountries = () => getData('/countries');
