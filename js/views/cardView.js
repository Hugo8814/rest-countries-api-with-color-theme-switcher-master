import View from "./View.js";

class CardView extends View {
  _formatNumberWithCommas(number) {
    // Convert number to string
    let numberString = number.toString();

    // Insert commas every three digits
    return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) => {
      window.addEventListener(ev, () => {
        if (document.querySelector(".grid")) {
          // Check if target element exists
          handler(); // Call the handler only if the target element exists
        }
      });
    });
  }

  generateMarkup() {
    const formatNumberWithCommas = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return this._data
      .map(
        (country) => `
        <a  href="country-details.html?country=${
          country.name
        }" class="grid__card">
          <div class="grid__card__flag">
            <img src="${country.flag}" alt="flag" />
          </div>
          <div class="grid__card__title">${country.name}</div>
          <div class="grid__card__pop">Population: <span class="grid__card__pop-font">${formatNumberWithCommas(
            country.population
          )}</span></div>
          <div class="grid__card__region">Region: <span class="grid__card__region-font">${
            country.region
          }</span></div>
          <div class="grid__card__capital">Capital: <span class="grid__card__capital-font">${
            country.capital
          }</span></div>
        </a>
        `
      )
      .join("");
  }

  renderCard() {
    // Render all country cards
    return this.generateMarkup();
  }
}

export default new CardView();
