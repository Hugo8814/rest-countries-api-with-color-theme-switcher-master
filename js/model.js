export const state = {
  countries: {
    name: "",
  },
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

const API = "https://restcountries.com/v3.1/";
export const loadCountriesData = async function (section, region) {
  try {
    //const data = await getJSON("https://restcountries.com/v3.1/name/ireland");
    const data = await getJSON(`${API}${section}/${region}`);

    console.log(data);

    state.countries = createCountriesObject(data);
    console.log(state.countries);
  } catch (err) {
    console.error(err);
  }
};
/// this code got refactored but im leave here if i need it
// export const loadSearchResults = async function (query) {
//   try {
//     state.search.query = query;
//     const data = await getJSON(`https://restcountries.com/v3.1/name/${query}`);

//     state.countries = createCountriesObject(data);
//   } catch (error) {
//     console.error(`${err} 💥💥💥💥`);
//   }
// };
