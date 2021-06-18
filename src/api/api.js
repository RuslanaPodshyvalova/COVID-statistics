const BASE_URL = 'https://api.covid19api.com';

export const getData = url => (fetch(`${BASE_URL}${url}`).then((response) => {
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return response.json();
}));
