import * as model from "./model.js";
import View from "./views/View.js";
import cardView from "./views/cardView.js";
import { loadCountriesData } from "./model.js";

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

// Call the controller function to start the application
controlCountriesCard();
