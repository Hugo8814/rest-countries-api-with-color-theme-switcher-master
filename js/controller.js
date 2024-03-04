import * as model from "./model.js";
import View from "./views/View.js";
import cardView from "./views/cardView.js";
import { loadCountriesData } from "./model.js";
import searchView from "./views/searchView.js";
import fliterView from "./views/fliterView.js";
import mainCardView from "./views/mainCardView.js";

// Define the controller function
const controlCountriesCard = async function () {
  try {
    // Load countries data from the model

    await loadCountriesData("all", "");

    // Render the countries data using the view
    cardView.render(model.state.countries);
  } catch (error) {
    // Handle errors
    console.error("Error loading countries data:", error);
  }
};
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
const controlSearch = async function () {
  try {
    // 1) Get search query

    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await loadCountriesData("name", query);
    // await model.loadSearchResults(query);

    // 3 render the cards
    cardView.render(model.state.countries);
  } catch (err) {
    console.error(err);
  }
};

const controlFilter = async function () {
  fliterView.toggleHidden();
  const data = await fliterView.getOptionData();
  console.log(data);

  await loadCountriesData("region", data);

  cardView.render(model.state.countries);
};

const controlMainCard = async function () {};
// Call the controller function to start the application
const init = function () {
  cardView.addHandlerRender(controlCountriesCard);
  searchView.addHandlerSearch(controlSearch);
  fliterView.addHandlerfilter(controlFilter);
};
init();
