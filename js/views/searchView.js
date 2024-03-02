class SearchView {
  _parentEl = document.querySelector(".search__bg");
  getQuery() {
    const query = this._parentEl.querySelector(".search__box").value;

    this._clearInput();
    return query;
  }
  _clearInput() {
    this._parentEl.querySelector(".search__box").value = "";
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
