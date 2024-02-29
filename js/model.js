export const state = {
  countries: {},
  search: {
    query: "",
    results: [],
  },
};

export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error("API IS NOT OKAY");
    return data;
  } catch (err) {
    throw err;
  }
};

const createCountriesObject = function (data) {
  return data.map((country) => ({
    flag: country.flags.png,
    name: country.name.common,
    nativeName: country.name.common,
    population: country.population,
    region: country.region,
    subRegion: country.subregion,
    capital: country.capital,
    tld: country.tld,
    currencies: country.currencies,
    languages: country.languages,
    borderCountries: country.borders,
  }));
};

export const loadCountriesData = async function () {
  try {
    //const data = await getJSON("https://restcountries.com/v3.1/name/ireland");
    const data = await getJSON("https://restcountries.com/v3.1/all");

    console.log(data);

    state.countries = createCountriesObject(data);
    console.log(state.countries);
  } catch (err) {
    console.error(err);
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON;
  } catch (error) {}
};
