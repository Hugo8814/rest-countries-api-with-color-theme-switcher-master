export const state = {
  countries: {},
};
console.log(state);
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

export const loadCountries = async function (id) {
  try {
    const data = await fetch("https://restcountries.com/v3.1/all");
    state.countries;

    const response = await data.json();
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
  }
};

getJSON("https://restcountries.com/v3.1/all");
