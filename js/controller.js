import * as model from "./model.js";
import View from "./views/View.js";
import cardView from "./views/cardView.js";
import { loadCountriesData } from "./model.js";
import searchView from "./views/searchView.js";

// Define the controller function
const controlCountriesCard = async function () {
  try {
    // Load countries data from the model
    await loadCountriesData();

    // Render the countries data using the view
    cardView.render(model.state.countries);
  } catch (error) {
    // Handle errors
    console.error("Error loading countries data:", error);
  }
};
const controlSearch = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);
  } catch (err) {
    console.error(err);
  }
};

// Call the controller function to start the application
const init = function () {
  controlCountriesCard();
  controlSearch();
};
init();
