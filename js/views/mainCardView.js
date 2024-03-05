import View from "./View.js";

class MainCardView extends View {
  _parentElement = document.querySelector(".section");

  addCardRender(handler) {
    if (document.querySelector(".section"))
      ["hashchange", "load"].forEach((ev) =>
        window.addEventListener(ev, handler)
      );
  }

  generateMarkup() {
    const formatNumberWithCommas = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return `
    ${this._data
      .map(
        (country) => `
      <div class="section">
        <div class="section__left">
          <img src="${country.flag}" alt="flag" />
        </div>
        <div class="section__right">
          <div class="right__title">${country.name}</div>
          <div class="right__box">
            <div class="country-card">
              <div class="country-card__info">
                <div class="country-card__name">${country.nativeName}</div>
                <div class="country-card__detail">Population: <span class="country-card__value">${formatNumberWithCommas(
                  country.population
                )}</span></div>
                <div class="country-card__detail">Region: <span class="country-card__value">${
                  country.region
                }</span></div>
                <div class="country-card__detail">Capital: <span class="country-card__value">${
                  country.capital
                }</span></div>
              </div>
            </div>
          </div>
          <div class="right__box-border">
            <div class="right__box-border__text">
              Border Countries:
              <div class="right__box-border__text__countries">Lorem</div>
              <div class="right__box-border__text__countries">Lorem</div>
              <div class="right__box-border__text__countries">Lorem</div>
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join("")}
  `;
  }
}

export default new MainCardView();
