export const state = {
  countries: [],
};
console.log(state);
const updateState = function (countryData) {
  // Push the country data to the countries array in the state
  state.countries.push(countryData);
};

const getApiData = async function () {
  try {
    const data = await fetch("https://restcountries.com/v3.1/all");
    if (!data.ok) {
      throw new Error("Network response was not ok");
    }
    const response = await data.json();
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
  }
};
getApiData()
  .then((countryData) => {
    updateState(countryData);
  })
  .catch((error) => {
    console.error(error);
  });
