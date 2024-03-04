import View from "./View.js";

class MainCardView extends View {
  _parentElement = document.querySelector(".grid__card");

  addCardhandler() {
    _parentElement.addEventListener("click", function (e) {
      e.preventDefult();
      console.log("something");
      handler();
    });
  }

  generateMarkup() {
    const formatNumberWithCommas = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return `
          <div class="section">
            <div class="section__left">
              <img src="" alt="" />
            </div>
            <div class="section__right">
              <div class="right__title">Lorem ipsum</div>
              <div class="right__box">
                ${this._data
                  .map(
                    (country) => `
                  <a href="country-details.html?country=${
                    country.name
                  }" class="country-card">
                    <div class="country-card__flag">
                      <img src="${country.flag}" alt="flag" />
                    </div>
                    <div class="country-card__info">
                      <div class="country-card__name">${country.name}</div>
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
                  </a>
                `
                  )
                  .join("")}
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
        `;
  }
}

export default new MainCardView();
