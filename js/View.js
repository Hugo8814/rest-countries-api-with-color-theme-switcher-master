export default class View {
  _generateCardMarkup(country) {
    return `
      <div class="grid__card">
        <div class="grid__card__flag">
          <img src="${country.flag}" alt="flag" />
        </div>
        <div class="grid__card__title">${country.name}</div>
        <div class="grid__card__pop">Population: ${country.population}</div>
        <div class="grid__card__region">${country.region}</div>
        <div class="grid__card__capital">${country.capital}</div>
      </div>
    `;
  }
}
